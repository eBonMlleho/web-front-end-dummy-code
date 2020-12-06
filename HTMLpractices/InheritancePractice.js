class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    
    // set isCheckedOut(){
    //   this._isCheckedOut = this._isCheckedOut;
    // }
    
   getAverageRating(){
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0); 
         return ratingsSum/this._ratings.length;    
   }
    
   toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
   }
    
   addRating(newRating){
          this._ratings.push(newRating);
   }
    
  }
  
  class Book extends Media {
      constructor(author,title,pages){
          super(title);
        this._isCheckedOut = false;
        this._author = author;
        this._pages = pages;
        }
      get author(){
      return this._author
    }
    
    get pages(){
      return this._author
    }
    
  }
  
  class Movie extends Media {
      constructor(director,title,runTime){
          super(title);
        this._isCheckedOut = false;
        this._director = director;
        this._runTime = runTime;
           }
    get director(){
      return this._director
    }
    
    get runTime(){
      return this._runTime
    }
    
    
  }
  
  
  
  class CD extends Media {
      constructor(artist,title,isCheckedOut,ratings,songs){
          super(title);
        this._isCheckedOut = false;
        this._artist = artist;
        this._songs = songs;
           }
    
    get artist(){
      return this._artist
    }
    
    get songs(){
      return this._songs
    }
   
  }
  /*
  let array = [1,2,3,4]
  let array1 = array
  console.log(array1.reduce((currentSum, rating) => currentSum + rating, 0)/array1.length)
  */
  
  /*
  let array = [1,2,3,4]
  array.push(5)
  console.log(array)*/
  
//   const historyOfEverything = new Book ('Bill Bryson','A Short History of Nearly Everything',544);
//   historyOfEverything.toggleCheckOutStatus();
//   console.log(historyOfEverything.isCheckedOut);
//   historyOfEverything.addRating(4);
//   historyOfEverything.addRating(5);
//   historyOfEverything.addRating(5);
//   console.log(historyOfEverything.getAverageRating());
  
  
//   const speed = new Movie('Jan de Bont','Speed',116);
//   speed.toggleCheckOutStatus();
//   console.log(speed.isCheckedOut);
//   speed.addRating(1);
//   speed.addRating(1);
//   speed.addRating(5);
//   console.log(speed.getAverageRating());
  
  
  