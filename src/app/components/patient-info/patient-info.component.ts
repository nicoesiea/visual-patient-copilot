import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-info',
  standalone: true,
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent {
  patientName: string = 'John Doe';
  patientAge: number = 30;
  patientCondition: string = 'Healthy';

  constructor() {}

  ngOnInit() {
    this.fetchPatientData();
  }

  fetchPatientData() {
    // Simulate an API call to fetch patient data
    setTimeout(() => {
      this.patientName = 'Jane Smith';
      this.patientAge = 28;
      this.patientCondition = 'Recovering';
    }, 2000);
  }
}
