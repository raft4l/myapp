import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayWhen } from 'ionic-angular/components/show-hide-when/display-when';
import { identifierName } from '@angular/compiler';

/**
 * Generated class for the ShowcaseDealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcase-deals',
  templateUrl: 'showcase-deals.html',
})
export class ShowcaseDealsPage {

  categories: Array<{title: string}>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
      
  }
  initializeCategories(){

    this.categories = [
      { title: 'Food'},
      { title: 'Sport'},
      { title: 'NewTech'},
      { title : 'ALL'},
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeCategories();
    
    

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      this.categories = this.categories.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcaseDealsPage');
  }

}
