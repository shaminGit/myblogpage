import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { Step1Component } from './pages/register/step1/step1.component';
import { Step3Component } from './pages/register/step3/step3.component';
import { Step2Component } from './pages/register/step2/step2.component';
import { BloggerComponent } from './pages/blogger/blogger.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blogger', component: BloggerComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'post/:id', component: PostComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'register', component: RegisterComponent,
        children: [{ path: 'step1', component: Step1Component },
        { path: 'step2', component: Step2Component },
        { path: 'step3', component: Step3Component }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
