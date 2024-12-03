const mongoose=require('mongoose');

const movieSchema=mongoose.Schema({
    movieName:  {   type:String,required:true   },
    language:   {   type:String,
                    enum:['Malayalam','Tamil','Telugu','Hindi','Kannada'],
                    default:'Malayalam',
                    required:true   },
    rating:     {   type:String,required:true   },                
    censored:   {   type:String,
                    enum:['U','U/A','A','R'],
                    required:true   },    
    genre:      {   type:String,require:true    },                    
    runtime:    {   type:String,required:true   },
    trailerlink:{   type:String,required:true   },


})

const movieData=mongoose.model('movie',movieSchema);

module.exports=movieData;