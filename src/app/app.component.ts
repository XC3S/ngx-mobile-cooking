import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-mobile-cooking';

  opened = false;

  state = {
    data: 
    [ 
      'https://www.masalazone.com/MasalaZone/media/MasalaZone/popup_small_500x500_SP/Food_by_section_SP/Grill-Biryani_SP/04_grills_and_biryani_portrait_1294-updated_1.jpg', 
      'https://i0.wp.com/thecheerfulkitchen.com/wp-content/uploads/2019/04/high_protein_breakfast_tacos_cheerful_kitchen_2.jpg?fit=1080%2C1620&ssl=1', 
      'https://images.unsplash.com/photo-1517947138120-81858a0b2ab7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://www.summercity.ca/wp-content/uploads/2016/05/HotDogs.jpg',
      'https://eilonpaz.com/wp-content/uploads/2016/01/Eilon_Paz_0018-853x1280.jpg',
      'https://static1.squarespace.com/static/535e5869e4b0a24f9e300fd4/5c25b80840ec9a76c47bafed/5c25b81a758d46403000cdb1/1545975855895/Toronto_Food_Photographer_Joanna_Wojewoda_FIKA_Toronto-2.jpg?format=500w',
      'https://static1.squarespace.com/static/535e5869e4b0a24f9e300fd4/5c25b80840ec9a76c47bafed/5c25b81a575d1fe24b95814f/1552686181932/Toronto_Food_Photographer_Joanna_Wojewoda_FIKA_Toronto.jpg?format=500w',
      'https://foodthoughts.co.uk/wp-content/uploads/2018/02/waitrose-chocolate-pancakes.jpg'
    ],
  };

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }

  open(){
    this.opened = !this.opened;
  }
}
