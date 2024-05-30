import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Modulo requerido para trabajar con formularios reactivos. Importar tambien en @Component({imports})

@Component({
  selector: 'app-project-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-reactive-form.component.html',
  styleUrl: './project-reactive-form.component.css'
})
export class ProjectReactiveFormComponent {
  newProjectForm: FormGroup; // Se crea la variable para el formulario y su tipo (el elemento formulario entero debe tiparse con FormGroup)
  name: FormControl;
  category: FormControl;
  year: FormControl;
  image: FormControl;
  // Se crean las variables correspondientes a cada campo del formulario y su tipo (deben tiparse con FormControl)

  constructor() {
    this.name = new FormControl("", Validators.required);
    this.category = new FormControl("", Validators.required);
    this.year = new FormControl("");
    this.image = new FormControl("");
    // Se declaran las variables creadas para cada campo del formulario. Requiere el metodo "new" y normalmente el valor inicial se deja en blanco para que lo rellene el usuario ("")

    this.newProjectForm = new FormGroup({
      name: this.name,
      category: this.category,
      year: this.year,
      image: this.image

    }) // Para declarar el elemento formulario, igualmente se requiere el método  "new" y se deben indicar de nuevo las variables que va a contener. Los nombres de estas variables son los que se utilizan para enlazarlos con los campos de formulario creados en html dentro del atributo "formControlName"
  }

  handleSubmit(): void {
    console.log('Nuevo proyecto creado:', this.newProjectForm.value);
    this.newProjectForm.reset();
  }
  // Se define un evento para que cuando se envíe el formulario, se ejecute un código. Normalmente y en este caso, devolver la información recogida en el formulario. Para ello, se declara la variable del formulario con .value: "this.variableForm.value"
}
