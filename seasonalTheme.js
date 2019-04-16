let currSeasonTheme = '';// bc season will be updated

const seasonalThemes = {
    'winter': {
        images: {
            headerURL: 'empty.jpg',
            additional_backgrounds: ['seasons/winter.gif']
        }, 
        "properties": {
          "additional_backgrounds_alignment": [ "top" ],
          "additional_backgrounds_tiling": [ "repeat"  ]
        }
    }, 
    'fall': {
        images: {
            headerURL: 'empty.jpg',
            additional_backgrounds: ['seasons/fall.gif']
        },
         "properties": {
          "additional_backgrounds_alignment": [ "top" ],
          "additional_backgrounds_tiling": [ "repeat"  ]
        }
    },
    'summer': {
        images: {
            headerURL: 'empty.jpg',
            additional_backgrounds: ['seasons/summer.gif']
        },
         "properties": {
          "additional_backgrounds_alignment": [ "top" ],
          "additional_backgrounds_tiling": [ "repeat"  ]
        }
    },
    'spring': {
        images: {
            headerURL: 'empty.jpg',
            additional_backgrounds: ['seasons/spring.gif']
        },
         "properties": {
          "additional_backgrounds_alignment": [ "top" ],
          "additional_backgrounds_tiling": [ "repeat"  ]
        }
    }
};

function checkTimeOfYear() {
    /*
    Winter solstice 2019 in Northern Hemisphere will be at 11:19 PM on
Saturday, December 21
All times are in Eastern Time.
    */
   /*
    Spring 2019 in Northern Hemisphere will begin on
Wednesday, March 20
and ends on
Friday, June 21
All dates are in Eastern Time.
   */
  /*
    Summer solstice 2019 in Northern Hemisphere will be at 11:54 AM on
Friday, June 21
All times are in Eastern Time.
  */
    /*
    Autumn 2019 in Northern Hemisphere will begin on
Monday, September 23
and ends on
Saturday, December 21
All dates are in Eastern Time.
    */

    //switch statements etc. are welcome <CONTRIBUTIONS ARE WELCOME>
    let date = new Date();
    /* USE FOLLOWING TWO VARIABLES AT LEAST TO DETERMINE EXACT SEASON TRANSITIONS?
    
    let hour = date.getHours()
    let minute = date.getMinutes();
    */
    let month = date.getMonth() + 1;
    let day = date.getDate();  // get day of month (1-31) of specified date according to local time according to MDN
    let is_winter = (month < 3) || (month == 3 && day < 20) || (month == 12 && day >= 21)
    let is_spring = (month == 3 && day >= 20) || (month > 3 && month < 6) || (month == 6 && day < 21)
    let is_summer = (month == 6 && day >= 21) || (month > 6 && month < 9) || (month == 9 && day < 23)
    let is_fall = (month == 9 && day >= 23) || (month > 9 && month < 12) || (month == 12 && day < 21)
    
    if (is_winter) {
        setSeasonalTheme('winter');
    } else if (is_spring) {
        setSeasonalTheme('spring');
    } else if (is_summer) {
        setSeasonalTheme('summer');
    } else if (is_fall) {
        setSeasonalTheme('fall');
    } else {
        // Default season
        setSeasonalTheme('fall');
    }
}

function setSeasonalTheme(season) {
    if (currSeasonTheme === season) {
        return; // upon periodical update attempts, if no need for season update, simply return
    }
    currSeasonTheme = season;
    browser.theme.update(seasonalThemes[season]);
}

// when user applies extension upon new browser session
checkTimeOfYear();


