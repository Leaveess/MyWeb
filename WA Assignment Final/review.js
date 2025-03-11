var fs = require('fs');
const path = require('path');
class Review {
    constructor(filePath){
           filePath = this.filePath = path.join(__dirname, 'reviews.json');
        }

    getAllReviews(){
        const data = fs.readFileSync('reviews.json','utf-8')
        return JSON.parse(data);
    }

    addNewReview(newReview){
        const reviews = this.getAllReviews();
        reviews.push(newReview);
          fs.writeFileSync('reviews.json', JSON.stringify(reviews, null, 2))
        
      }

      
}

module.exports = Review;