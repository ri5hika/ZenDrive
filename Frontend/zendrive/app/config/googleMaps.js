// Google Maps Configuration
// Replace these with your actual API keys from Google Cloud Console

export const GOOGLE_MAPS_CONFIG = {
  // iOS API Key - Get from Google Cloud Console
  IOS_API_KEY: 'YOUR_IOS_API_KEY_HERE',
  
  // Android API Key - Get from Google Cloud Console  
  ANDROID_API_KEY: 'YOUR_ANDROID_API_KEY_HERE',
  
  // Web API Key (if needed for web platform)
  WEB_API_KEY: 'YOUR_WEB_API_KEY_HERE',
  
  // Default map settings
  DEFAULT_REGION: {
    latitude: 28.855393,
    longitude: 78.771284,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  
  // Map styling (dark theme)
  DARK_MAP_STYLE: [
    {
      elementType: "geometry",
      stylers: [{ color: "#212121" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#ffffff" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#212121" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#373737" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#212121" }],
    },
  ],
  
  // Route polyline styling
  ROUTE_STYLE: {
    strokeColor: '#4285F4',
    strokeWidth: 6,
    strokeColors: ['#4285F4'],
    lineDashPattern: [1],
  },
};

// Helper function to get the appropriate API key based on platform
export const getApiKey = (platform) => {
  switch (platform) {
    case 'ios':
      return GOOGLE_MAPS_CONFIG.IOS_API_KEY;
    case 'android':
      return GOOGLE_MAPS_CONFIG.ANDROID_API_KEY;
    case 'web':
      return GOOGLE_MAPS_CONFIG.WEB_API_KEY;
    default:
      return GOOGLE_MAPS_CONFIG.ANDROID_API_KEY; // fallback
  }
};
