import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';
import { faDashboard, faPerson, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand, faFolder } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit  {
  faDashboard = faDashboard;
  faPerson=faPerson;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faContactBook=faContactBook;
  faHand=faHand;
  faFolder=faFolder;

  constructor(private el:ElementRef){

      window.addEventListener('scroll', function(){
        var mattoolbar:any = document.querySelector("mat-toolbar");
        mattoolbar.classList.toggle("sticky", window.scrollY > 0);
      }
      )
     
  
  }
  ngOnInit(): void {

    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });

    });

  }



  

  @ViewChild('sidenav') sidenav:MatSidenav | undefined
  responsiveMenu:any;
  responsiveContent:any;
  defaultStatus=false;
  hideanchor=false;
  openNav(status:any){
    if(status===this.defaultStatus)
    {
      this.responsiveMenu={
      
      }
      this.responsiveContent={

      }
      this.defaultStatus = true;
      this.hideanchor = true;

    }else//sidenav on
    {      
      this.responsiveContent={
      }
      this.defaultStatus=false;
  }
}
}


//admindemo code
// import { Component, ElementRef, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bar',
//   templateUrl: './bar.component.html',
//   styleUrls: ['./bar.component.css']
// })
//  export class BarComponent implements OnInit {
//   constructor(private el: ElementRef) { }
//   ngOnInit(): void {

//     let alldrpdwn = document.querySelectorAll('.dropdow-container');
//     console.log(alldrpdwn, 'alldrpdwn#');
//     alldrpdwn.forEach((item: any) => {
//       const a = item.parentElement?.querySelector('a:first-child');
//       console.log(a, 'a#');
//       a.addEventListener('click', (e: any) => {
//         e.preventDefault();
//         this.el.nativeElement.classList.toggle('active');
//         item.classList.toggle('show');
//       });

//     });

//   }


//   // responsivemenu 
//   responsiveMenu: any;
//   // responsivemaincontent
//   responsiveContent: any;
//   defaultStatus = false;
//   hideanchor = false;
//   openNav(status: any) {
//     if (status === this.defaultStatus) {
//       this.responsiveMenu = {
//         'display': 'block',
//         'width': '60px',
//         // 'text-align': 'center'
//       }
//       this.responsiveContent = {
//         'margin-left': '60px'
//       }
//       this.defaultStatus = true;
//       this.hideanchor = true;
//     } else {
//       this.responsiveMenu = {
//         'display': null,
//         'text-align': 'center'
//       }
//       this.responsiveContent = {
//         'margin-left': null
//       }
//       this.defaultStatus = false;
//       this.hideanchor = false;
//     }

//   }

// }
