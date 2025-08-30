# Google Maps Platform SDK Setup Guide

This guide will help you set up Google Maps Platform SDK in your Zendrive project.

## Prerequisites

1. **Google Cloud Console Account**: You need a Google Cloud account
2. **Billing Enabled**: Google Maps Platform requires billing to be enabled
3. **API Keys**: You'll need separate API keys for iOS and Android

## Step 1: Enable Google Maps Platform APIs

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps SDK for iOS**
   - **Maps SDK for Android**
   - **Places API** (for location search)
   - **Directions API** (for route calculation)
   - **Geocoding API** (for address conversion)

## Step 2: Create API Keys

1. In Google Cloud Console, go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Create separate API keys for:
   - iOS (restrict to iOS apps)
   - Android (restrict to Android apps)
   - Web (if needed)

### API Key Restrictions (Recommended)

**iOS Key:**
- Application restrictions: iOS Apps
- Bundle ID: `com.zendrive.app`

**Android Key:**
- Application restrictions: Android Apps
- Package name: `com.zendrive.app`
- SHA-1 certificate fingerprint: (get this from your keystore)

## Step 3: Update Configuration Files

### 1. Update `app/config/googleMaps.js`

Replace the placeholder API keys with your actual keys:

```javascript
export const GOOGLE_MAPS_CONFIG = {
  IOS_API_KEY: 'YOUR_ACTUAL_IOS_API_KEY',
  ANDROID_API_KEY: 'YOUR_ACTUAL_ANDROID_API_KEY',
  WEB_API_KEY: 'YOUR_ACTUAL_WEB_API_KEY',
  // ... rest of the config
};
```

### 2. Update `app.json`

Replace the placeholder API keys:

```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_ACTUAL_IOS_API_KEY"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_ACTUAL_ANDROID_API_KEY"
        }
      }
    }
  }
}
```

## Step 4: Build Configuration

### For iOS:
1. Run `npx expo run:ios`
2. The Google Maps configuration will be automatically applied

### For Android:
1. Run `npx expo run:android`
2. The Google Maps configuration will be automatically applied

## Step 5: Testing

1. **Location Services**: Ensure location services are enabled on your device
2. **Internet Connection**: Google Maps requires an internet connection
3. **API Quotas**: Check your Google Cloud Console for API usage and quotas

## Troubleshooting

### Common Issues:

1. **"Google Maps API key not found"**
   - Verify API keys are correctly set in both `app.json` and `googleMaps.js`
   - Ensure the APIs are enabled in Google Cloud Console

2. **"This app won't run without Google Play services"**
   - This is normal for Google Maps on Android
   - Ensure Google Play Services is installed and updated

3. **Maps not loading**
   - Check internet connection
   - Verify API key restrictions
   - Check billing status in Google Cloud Console

4. **Location not working**
   - Ensure location permissions are granted
   - Check device location settings

## Cost Considerations

Google Maps Platform pricing:
- **Maps SDK for iOS/Android**: $7 per 1000 map loads
- **Places API**: $17 per 1000 requests
- **Directions API**: $5 per 1000 requests
- **Geocoding API**: $5 per 1000 requests

**Free Tier**: $200 monthly credit (approximately 28,500 map loads)

## Security Best Practices

1. **Restrict API Keys**: Always restrict API keys to specific platforms and bundle IDs
2. **Monitor Usage**: Set up billing alerts in Google Cloud Console
3. **Regular Review**: Periodically review and rotate API keys
4. **Environment Variables**: Consider using environment variables for production builds

## Additional Features

With Google Maps Platform, you can now use:
- **Real-time traffic data**
- **Advanced routing algorithms**
- **Place autocomplete**
- **Street View integration**
- **Custom map styling**
- **Offline maps** (with additional setup)

## Support

- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [React Native Maps Documentation](https://github.com/react-native-maps/react-native-maps)
- [Expo Documentation](https://docs.expo.dev/)
