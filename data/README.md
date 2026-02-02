# Using Shared Contact Data

## Overview

I've created a centralized data file at `/data/contactData.js` that stores all your contact information in one place. This makes it easy to update your information once and have it automatically reflected across all components.

## What's in the Data File

**File**: [contactData.js](file:///Users/hushed_polar/Documents/next/my-app/data/contactData.js)

```javascript
// Contact information (email, location, etc.)
export const contactInfo = [...]

// Social media links
export const socialLinks = [...]

// Personal information (name, title, bio)
export const personalInfo = {...}
```

## How to Use It

### 1. Import the Data

At the top of any component:

```javascript
import { personalInfo, contactInfo, socialLinks } from "@/data/contactData";
```

### 2. Use the Data

**Example in Hero.js**:
```javascript
<h1>Hi, I'm <span>{personalInfo.name}</span></h1>
<p>{personalInfo.title}</p>
<p>{personalInfo.bio}</p>

{/* Email button using shared email */}
<a href={`mailto:${personalInfo.email}`}>Email Me</a>
```

**Example in Contact.js**:
```javascript
{contactInfo.map((info, index) => (
  <div key={index}>
    <div>{info.icon}</div>
    <div>{info.label}: {info.value}</div>
  </div>
))}
```

## Benefits

✅ **Single Source of Truth**: Update your info in one place  
✅ **Consistency**: Same data across all components  
✅ **Easy Maintenance**: No need to search through multiple files  
✅ **Reusability**: Import anywhere you need it

## Current Usage

- **Hero.js**: Uses `personalInfo` for name, title, and bio
- **Contact.js**: Uses `contactInfo` and `socialLinks`
- Both components now share the same email address!

## To Update Your Info

Just edit [contactData.js](file:///Users/hushed_polar/Documents/next/my-app/data/contactData.js) and all components will automatically update! 🎉
