import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { UniversitiesComponent } from './universities/universities.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: 'chat', component: UniversitiesComponent},
  { path: 'univ', component: NewComponentComponent},
  { path: 'propos', component: ProposComponentComponent},
  { path: 'registre', component: ContactComponentComponent},
  { path: 'login', component: ContactComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

