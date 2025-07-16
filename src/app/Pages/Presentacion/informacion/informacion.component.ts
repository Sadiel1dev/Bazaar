import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TicketCreateDto } from '../../../Core/Models/Interface/ticket';
import { TicketService } from '../../../Core/Services/ticket.service';
import { NgFor, NgIf } from '@angular/common';
import { EcommercedetailComponent } from "../ecommercedetail/ecommercedetail.component";

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, EcommercedetailComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit{
  parametro:string| null = '';
  //ticket
  ticketForm!: FormGroup;
  selectedFiles: File[] = [];
  maxFileSizeMB = 5;
  allowedFileTypes = ['image/jpeg', 'image/png'];

constructor(private fb: FormBuilder, private ticketService:TicketService, private route: ActivatedRoute,private router:Router) {
 this.ticketForm = this.fb.group({
      titulo: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      descripcion: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.email
      ]],
      telefono: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      imagenes: [null]
    });
}
ngOnInit() {
  this.parametro = this.route.snapshot.paramMap.get('id');
  this.scrollToTop()
}
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

 onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validar tipo de archivo
        if (!this.allowedFileTypes.includes(file.type)) {
          this.ticketForm.get('imagenes')?.setErrors({ invalidType: true });
          return;
        }
        
        // Validar tamaño máximo
        if (file.size > this.maxFileSizeMB * 1024 * 1024) {
          this.ticketForm.get('imagenes')?.setErrors({ maxSize: true });
          return;
        }
        
        this.selectedFiles.push(file);
      }
      
      // Limpiar errores si todo está bien
      this.ticketForm.get('imagenes')?.setErrors(null);
    }
  }
  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }
   onSubmit(): void {
    if (this.ticketForm.valid) {
      const formData = new FormData();
      const formValue: TicketCreateDto = this.ticketForm.value;
      
      // Agregar campos de texto
      formData.append('Titulo', formValue.titulo);
      formData.append('Descripcion', formValue.descripcion);

      formData.append('Usuario.Email', formValue.email);
      formData.append('Usuario.Telefono', formValue.telefono);
      
      // Agregar archivos
      this.selectedFiles.forEach(file => {
        formData.append('Imagen', file, file.name);
      });

      console.log(formValue)
      // Enviar al servicio
      this.ticketService.createTicket(formData).subscribe({
        next: (response: any) => {
          this.resetForm();
        },
        error: (err: any) => {
        }
      });
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      this.markFormGroupTouched(this.ticketForm);
      
      
    }
  }

  private resetForm(): void {
    this.ticketForm.reset();
    this.selectedFiles = [];
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
navegar(){
  this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
  this.router.navigate(['tu-ruta']);
});

}
}
