import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  {
    path: 'register-user',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    // children: [
    //   {
    //     path: '/',
    //     component: HomepageComponent,
    //   },
    // ],
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // { path: 'sign-in', component: SignInComponent },
  // { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent },

  // { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
