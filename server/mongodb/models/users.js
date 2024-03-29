import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: [true, "Username already exists"],
    maxLength: 20,
    required: [true, "Username cannot be empty"],
  },
  password: {
    type: String,
    minLength: [3, "Password must be minimum 5 characters"],
    maxLength: [100, "Password cannot exceed 100 characters"],
    required: [true, "Password cannot be empty"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    maxLength: 50,
    required: [true, "Email cannot be empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  firstName: {
    type: String,
    trim: true,
    maxLength: 50,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 50,
    default: "",
  },
  gender: {
    type: String,
    trim: true,
    maxLength: 15,
    default: "",
  },
  biography: {
    type: String,
    trim: true,
    maxLength: 150,
    default: "",
  },
  photo: {
    type: String,
  },
  watchList: {
    type: [],
    default: [],
  },

  userType: {
    type: String,
    enum: ["user", "admin", "banned"],
    required: true,
    default: "user",
  },

  profile_picture: {
    type: String,
    required: true,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYGBgYHBwYJCgkKCQ0MCwsMDRQODw4PDhQfExYTExYTHxshGxkbIRsxJiIiJjE4Ly0vOEQ9PURWUVZwcJYBBgYGBgYGBgcHBgkKCQoJDQwLCwwNFA4PDg8OFB8TFhMTFhMfGyEbGRshGzEmIiImMTgvLS84RD09RFZRVnBwlv/CABEIAPoA+gMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQIGBQQDBwj/2gAIAQEAAAAA/ogAAAACYgAAAAFogAAAAFogAAAAFogAAAAFogAAAAFogAHg5Pnv0evYAFogAfPKcoPvrOiAFogAri/CBOy6IAtEAGczwB6N1YAtEAI/P6ADVdoAtEAOdjAA6+tALRADi5UAPdtgC0QA4uVAD37UAtEAPBigA7OrALRABgvgANf1QC0QAcPLgHt20gFogAZHkgfXaesAWiABGd4FR0NX6QAtEAA+PH8f26nQAAtEAHL5Xg8lZPR7un1vqAWiAV4XB+AAW7Gj+4FogPFkvKAAX03bBaIHNyFAAAd/ShaIPJiaAAANR3BaIMXzwAAC269BaIeHEgAABoNIWiGezgAAAe3blohmOEAAAH135aIZnggAAB9d+WiGZ4IAAAfXflhmOAAAAH2/QB//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAIAQIQAAAAoAAAAAAAANEgAaozABsJkAugYAGwmQBqjMAGgyALaRIBqgJkNUAZhdAAwXQAMF0ADD//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAIAQMQAAAAwAAAAAAAAEm6AE4NoAQG0AIDaAEBtACcFaAGYoAMzBtAIANoJwAVpkgAsyQAWZIALf/EADkQAAIBAgIHBQYFAwUAAAAAAAECAwQRAAUhMDFAQVFhEiJxgbETIDIzcpEQQnOhwRRj0SRScJLh/9oACAEBAAE/AP8Aky18VGZ0dMSDJ2nH5U0nz4Ylz5zoigUDmxv6YOd1v9oD6cJntUD3442HQEHEGeUzm0qtGefxLhHSVQ8bhlOwg3G8yypBG0kjBVG0nFbms9SSkZMcXIHvHxP8Y8vdp6melftwuVPEcD4jFBmUdaOyVCSjat9vUbu7pGjO7AKBdieAxX1z1spNyIxoRf5PXUKzIwZWIYG4IOkYy6uWtis1hKg7wHEc92zur0rSIeTSfwNVTVD0k8cy7R8Q5rxGEdJEWRDdWAIPQ7o7qiM7HQqknyxLI00skjHS7EnV5JP26ZoSbmNrj6TumayGOglttay/c6zJZOxW9knQ6EHy07pnpIpYhwMo9DrMtP8Ar6Xq9vuDumerekjPKUemsywXr6a3BifsDumZxe1oZwBcqO0PI6zI4y1W8hGhEP3OjdCAQQQCCLEdMVMDU08sJ/K1geY4HVbMZNTmGjDkWMpv5cN1zqjMkYqY1JZBZwOK8/LVUFI1ZULHbuDS55L/AO4AAAAFgBYDkN10EWsORvjM8uamcyxLeEn/AKHkemohgkqJVjiQlj+3XwxR0kdHCI00k6Wbmd3IDAggEEWIOw4rclYEyUguOMZOkeGHRkYqylWG0EWPuaLXJxSZbU1RBCFUO12FvsOOKSkgo07MS6T8THad524np4JxaaNCOZ2jzxLlWWkkrVezP1qw/fByql4ZpFbqBiPKqIkdrMVbopUepxT5dQQkGNFdhxY9s4N+R3clUUlmCgbSTYYnziiiJCsZDyUaPucS57O2iKJEHM944kzCtl+Kpe3IHs+mCzMe85bxJOLAbAPwsOWB0/bRhKqpiI7FRILdScRZzWJYMySDqLH7jEOewNomjaM8x3hiKeCdbwyqw6HZ5bkzqilnYKo2kmwGKrO0W6Uqdo/72+HyHHE9TPUm80rMeR2Dy1iMyEMjFSNIINjimzueMgTr7VeY0NinqYKpO1C4PMbCPEa+sroaJLue05F1QbT/AIGKusnq2vI2gHuoPhGNuvjkeJ1kjcqw2EHFBm6TFYqmyvsDflP+DrcxzBKJOytmlYd0cAOZw8jyu0jsWcm5J47nlmZlCsFS912LITs6Hpq6yrSjgaUgE7FHM4kkeV3kkYlmNyTum3RjKK8ygU0rXdR3CeIHDxGpHLGZ1f8AV1LWPcTur/J892R3jdJENmUgqeRxSzrVQRzD8w0jkeI1GZTmnopXBsx7q+Jxs3fIpyGmpydBHbXxG3UZ9IbU0Q2XLH0/C3XFuuLdcW64t1xbri3XFuuLdcW64t1xbri3XFuuLdcW64t1xbri3XFuuLdcW64y6T2VbTm+gvY+B0ajPvnwH+2R++8QfPg/UX1wdvv5782n+g+u8U/z4f1F9dRnvzaf6D67xT/Ph/UX11Gf/Np/oPrvFP8APh/UX193/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAIDBAMVD/2gAIAQIBAT8A+soooRwngOQ9seA8B0Bjj0UVFFFgsVYZmg0NBwDf/8QAGhEAAgMBAQAAAAAAAAAAAAAAAREAMEAgUP/aAAgBAwEBPwD1nHHHYTyMAwDAKzyLFFFY4+XifRrHBwHAb//Z",
  },
});

export default mongoose.model("User", user);
