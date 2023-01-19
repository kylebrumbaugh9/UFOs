# UFOs

## Overview

### Purpose
The purpose of this exercise was to build a webpage that depicted data about UFO sightings and add filters to dynamically update the table on multiple criteria. 

### Technology used
I used Javascript and HTML to write the code. 

I also used Visual Studio Code to edit the code.

I referenced a few web articles including https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries and multiple links on stackoverflow.com to help guide my code.

## Results
The website is super easy to use! 5 filters have been added so that users can filter on any combination of 5 columns: Date, City, State, Country, and Shape. See image below!

![image](https://user-images.githubusercontent.com/114685724/213581269-f052e4c2-759b-4d5a-973b-c72115fc2272.png)

By entering in a state, users can filter the list down to a single state: as shown below, by adding "ar" to the state filter, the table only returns UFO sightings in Arkansas

![image](https://user-images.githubusercontent.com/114685724/213581403-0ce18ba4-9f02-4bb8-b6c9-8745824ae8b1.png)

Users can also add multiple criteria: so if a user wanted to see all UFO sightings of a particular shape on a particular day, the user would clear the other filters and filter on those two values.

![image](https://user-images.githubusercontent.com/114685724/213581690-d44bc804-f559-44c7-bd94-98b0e51aed8c.png)


## Summary

Overall, this website allows users to filter on constant, declared values with specific and consistent data. I think one drawback is that we can't filter on the duration because there are numbers and text and filtering by "5" for example may show minutes or seconds. 

I think it would be really cool if we could add a filter on sets of durations like (< 5 seconds, 5-10 seconds, 10-60 seconds, 1-2 minutes, 2-5 minutes, etc). 

I also think it could be cool to add a map to this webpage to see how geographically close these sightings are and see if there are any consistencies on certain days. For example, if neighboring states saw the same shape of UFO on the same date with similar comments, we could potentially project its path and then query other people in cities on that path to add to the data. 
