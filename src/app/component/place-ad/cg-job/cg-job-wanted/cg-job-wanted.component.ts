import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cg-job-wanted',
  templateUrl: './cg-job-wanted.component.html',
  styleUrls: ['./cg-job-wanted.component.css']
})
export class CgJobWantedComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

    });
   }

  ngOnInit(): void {
  }

  activePage:string = "require_item"
  gotoNextPage(nextPage: string){
    this.activePage = nextPage;
  }

  lat = 22.2736308;
  lng = 70.7512555;
  commonSelectArr: any[] = [
    {
      id: "notice_period", name: "Notice Period", options: [
        {id: "none", name: "None"},
        {id: "1_week", name: "1 Week"},
        {id: "2_week", name: "2 Week"},
        {id: "3_week", name: "3 Week"},
        {id: "1_month", name: "1 Month"},
        {id: "2_month", name: "2 Month"},
        {id: "more_than", name: "More than 2 month"}
      ]
    },
    {
      id: "vise_status", name: "Visa Status", options:[
        {id: "none_applicable", name: "None Applicable"},
        {id: "business", name: "Business"},
        {id: "employment", name: "Employment"},
        {id: "residence", name: "Residence"},
        {id: "spouse", name: "Spouse"},
        {id: "student", name: "Student"},
        {id: "tourist", name: "Tourist"},
        {id: "visit", name: "Visit"},
      ]
    },
    {
      id: "career_level", name: "Career Level", options: [
        { id: "student_intern", name: "Student/Intern" },
        { id: "junior", name: "Junior" },
        { id: "mid_level", name: "Mid-level" },
        { id: "senior", name: "Senior" },
        { id: "manager", name: "Manager" },
        { id: "executive_director", name: "Executive/Director" }
      ]
    },
    {
      id: "salary", name: "Unspecified", options: [
        {id: "0_1999", salary: "0 - 1,999"},
        {id: "2000_3999", salary: "2000 - 3,999"},
        {id: "4000_5999", salary: "4000 - 5,999"},
        {id: "6000_1999", salary: "6000 - 7,999"},
        {id: "8000_11999", salary: "8000 - 11,999"},
        {id: "12000_19999", salary: "12000 - 19,999"},
        {id: "20000_29999", salary: "20000 - 29,999"},
        {id: "30000_49999", salary: "30000 - 49,999"},
        {id: "50000_99999", salary: "50000 - 99,999"},
        {id: "100000+", salary: "100,000+"}
      ]
    },
    {
      id: "min_exp", name: "Minium Experience", options: [
        { id: "zero_one", name: "0-1 Years" },
        { id: "one_two", name: "1-2 Years" },
        { id: "two_five", name: "2-5 Years" },
        { id: "five-ten", name: "5-10 Years" },
        { id: "ten-fifteen", name: "10-15 Years" },
        { id: "more_fifteen", name: "15+ Years" },
      ]
    },
    {
      id: "min_education", name: "Minium Education", options: [
        { id: "n_a", name: "N/A" },
        { id: "high_secondary", name: "High-School/Secondary" },
        { id: "bachelors", name: "Bachelors Degree" },
        { id: "masters", name: "Masters Degree" },
        { id: "phd", name: "PhD" }
      ]
    },
    {
      id: "commitment", name: "Commitment", options: [
        { id: "full_time", name: "Full Time" },
        { id: "part_time", name: "Part Time" },
        { id: "contract", name: "Contract" },
        { id: "temporary", name: "Temporary" },
        { id: "other_commitment", name: "Other" },
      ]
    },
  ];

}
