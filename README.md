## Mumble
 _your bumble for clothes_ 

https://github.com/user-attachments/assets/6e5b86d1-20e2-434f-ab60-6c32cc34518f

Mumble is a React Native application frontend that allows users to swipe through outfits, save favorites, and view detailed information about the items worn in each outfit. The app includes several features aimed at providing a seamless and engaging experience for fashion enthusiasts.

## Features:

**./Home Screen**

- Right Swipe: Like an outfit.
- Left Swipe: Dislike an outfit.
- Tap: Save an outfit.
- Long Press: View product details, which lists the items worn in the outfit.

**./Profile Screen**

- View your uploaded and saved posts.
- View and redeem vouchers.

**./Add Outfit Screen**

- Upload new outfits.
- Add multiple items for each outfit .

**./Points Screen**

- Earn points through various challenges.
- Redeem vouchers using earned points.

**./Saved Outfits Screen**

- View all your saved outfits.

## Installation

**Prerequisites**:

Ensure you have Node.js and npm installed on your machine.

This project works fine for iOS but in Android version it may look a little different because I've only worked on iOS.


### Running the project

Clone this repository :

```
git clone https://github.com/tamannathakur/Mumble
cd mumble
```

Install packages :

```
npm install
```

When installation is complete, run :

```
npm start 

```
or 

```

npx expo start -c 


```
The following will show up in the terminal, to run the app, install expo/ expo go(available on playstore and apple store):

![image](https://github.com/user-attachments/assets/cfac0a52-ca92-4e2c-92f2-b28c968ac251)

Scan the newly shown qr code(the one which will show up in your terminal)

The app will start running on your phone.

## Project Structure

```plaintext
├── AddOutfitScreen.js       # Screen to upload new outfits
├── App.js                   # Main application file
├── HomeScreen.js            # Screen for swiping through outfits
├── OutfitDetails.js         # Screen displaying details of items in an outfit
├── PointsScreen.js          # Screen for viewing and redeeming points
├── ProfileScreen.js         # Screen for viewing and customizing profile
├── SavedCard.js             # Component for displaying saved outfits
├── SavedOutfitsScreen.js    # Screen for viewing saved outfits
├── assets                   # Folder containing images and other assets
├── android                  # Platform-specific folder for Android builds
├── ios                      # Platform-specific folder for iOS builds
└── ...
