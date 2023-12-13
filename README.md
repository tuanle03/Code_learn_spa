# CodeLearn Web Platform

Welcome to CodeLearn, your ultimate resource for comprehensive programming knowledge and a thriving community for collaborative learning.

## Overview

CodeLearn is a web-based project that houses a rich repository of articles spanning various programming topics. Our platform is designed to equip learners with in-depth knowledge while fostering a sense of community through an interactive forum.

## Features

- **Diverse Knowledge Base:** Explore a vast collection of articles covering a wide range of programming subjects. From beginner-friendly tutorials to advanced concepts, CodeLearn is your one-stop destination for continuous learning.

- **Interactive Forum:** Engage with a dynamic community of developers on our forum. Pose questions, share insights, and collaborate with fellow learners to overcome programming challenges. Our community is here to support your growth.

- **User-Friendly Interface:** Experience a visually appealing and intuitive user interface that ensures seamless navigation. The design is crafted to be both eye-catching and approachable, creating an environment that resonates with programmers of all levels.

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
* [Documentation](#documentation)
* [Contact Information](#contact-information)
* [Demo or Screenshot](#demo-or-screenshot)

## Installation
Follow these steps to set up CodeLearn on your local machine:

### Setting Up the Development environment

Before you begin, ensure you have the following installed:

- Visual Studio Code
- Node.js (version 16 or higher)
- npm (comes with Node.js installation)
- Prettier Extension

### Creating a React App

We can use Vite because it's much faster and gives us small bundle sizes:

- To create an app using Vtie we use `npm create vite@latest`
- Next we need to specify project name `codelearn-app`
- Next we select a framework `React`
- Select language `TypeScript`
- Next we go to codelearn-app by using `cd codelearn-app` and install all the third party dependencies by using `npm i`
- Finally, run web with `npm run dev`

### Project Structure

The project is organized in the following structure:

- Node modules folder is where all the third-party libraries are installed ![Node modules](https://lh3.googleusercontent.com/pw/ABLVV86fF6ZuAQwi7CabJqSCVLABHG-CKa0YY8NqYMjX_PgYRqXx6nIggy1tLC8_r5Dp07SmUpo7SjlSkXIXOxWTVVzyvh1c4Ms5aI1qdBaeI1PWrEDxzMhaxl52Df6E4xD-UCVVRbbkad0HsGGJ-EMnSpV5JFWPBPdKkrTkwUPUqe7Lmw8UCoenEw_V6b07ht86CfSYQMXWZGJklmhqzSnqY3dBOI3mHHHg-KWya4mwyfjijrD54i6GnupaecZbOayfNhhCqoUrMYlnel0_OsCsyDZrXH25iVsyHCiMBOqo_kGbtX2yQOQI-Xu-GK3jfdXtnE9Ww5PbC8NmfaBgR9LyNnzzjJ_BGifXSXNoZ_QTR28PZM5yqoYJPY6RcN_U6UBL25tvf0ymG0YCMgTmmUqLF76K5Qm_KB6yZD1Q3jhqA_azMXl3NHddI4Q1uB-Ol91AgZS6jO3lFF9Zo_JPFDUwsWZxM7oF3xkbDiKDcUqtRS0nvAmASOP2vcKbVTxCSOrAJoD83QSmms3yHOVuugAyOSCZbmhTgfGKsHXrws4FKLSCNpf0-U97heakh5eeeQRiJ2jZXxa0qTpDYg_uJ9GtsHG8-NXMsUEIrOQTg39fb52nDyxmoFc81gFe-ycFa44FGVGS6KMp0J4rphUMWE-TLFdZo0vhtHxF3VlgaFoM0TE7L-_kvnx6P9FZ_k2FyJ9HWZcQSVUH_CyQcHQ7Xd0r7gTOk2jS3i1Y-Mb58zi63Kb-TvkWBTKp46TfVhq7X-eedJY0VHspVZChhTM4MJvtH1ZiP0NEMFED4BifAlCpg2rYOf4qEJ4cv0T_jBqM4NFNdrib5VJTSHMivoEJN21XNtG1osF2CR3NEZRqmgDf9z6jEAsFrPa5eqRYB2TMOc1BG0sH=w323-h344-s-no-gm?authuser=0)
- Source folder is a source code of our application ![Source folder](https://lh3.googleusercontent.com/pw/ABLVV86O1WTEQIeuJFzMbCLOU9eXCdsyBK6lyb8TpeLgJ4zZfdwA2zsvwuDDG88ZyjQP1LsJmdVLqfNUNt6yqC9M40ySoeytDPuBqyIlQ8i2HYa6rXxXzwJqyH4atzXM2UO-wIplufsg289MyGxui3uqNjFqVH86n_xOq6faKd2lMvH4A_0oFiu0bQIl6CQdMNc5mpI3q8NN3NGnY9Xj5bmAtvgnKfZyKIXbmpMfi1ZDRUOO6oUE1fm90JsVvh2-Kmu9HMpm22rwWbOJQLErGd03o90WnmEwFqo45fx-xg34tIg4FWudIkrXlZBufw1TF4idWRh_Ox0EByxJ4xKnNEWB5_s4e-qZulGDe6fx9YYjr56mALhXJbE7NO5UIfcOlZXRWy2genxQwgtmEODoTBUvj0LswSJiHvjHQ0WcjfG_7A7rsFwlREqJFRGFrd1FuQVuGTRJUF7w2IcJkmcCx3Uye84GaPmHlpVc7mJB1nKFM3ympz2ucRnXgVNrhgG0SbNChMamORKKXCrMHCt675PC8GZFDyD6xW_jJXaza6pAYKYaMoJbJB-G3AzRLESPX2DrYAyrV-jjpRXXOaf1Rbwlkno7QWTWAYgA3HRNY35SCkpf1NLc_fqSXPE8oCzLAp2VGvckAGDyKEH7tKaFMB32VWRtrOLNIzRTQujlM9kNfhCiJHR1WE7br6SzJgUDCh-60t9Ey4h6-KcpgUKpY1KoCDkOZqu8vAOBeo6Zin5gGra4f9PYUFjV5IgyF5aJgXtqjKBC2g2lYLIYcR853lziWlSlz1uGbqro-1CwzofBLcpjVFySLyTbrB6A9g4IjYY9NhMnbs4regcIROifaxpoULmBFIn-belTsHOe3Q-QldqRsUgZnGzfJSnhOJcgA54rUo5u=w236-h244-s-no-gm?authuser=0)
- We have a component called the App Component ![App Component](https://lh3.googleusercontent.com/pw/ABLVV87btE-mCECOnYbtKR3Bjdve7jEkmX9sk7Yugd9Q79HsclT1DTi-xTQUfWXKVdIoLdjGdIuSMYZ4gZp0nZKS93BTuvKN_scXqIs5rgFqqxGDCmjHRNGBu5pD3Q8XjUIMp__lKnSI8jrTR0mDoYff3uGnLZszCBoA0xtAoj-TSOQG9UET05h_Vu4gaMRISCzXARzyX3U3IB5Ge9XeHa2Yti0bGxXgHZXGlm27BrMjrb36YmfME2BezPlGsCil0SwHMLJJlY7tvrvEKu5_owEdyVWYSGVpwPWdcMWJvJQWztwQ9S8zSKhxwRfAybwZ9NxbauZkmvyk9vDDPZ60jdO-MzF5OynMVCxVl-pDoA9XHBNfCK6Mv9db6YtaTLlnz664RlklK3osmbQ2Fmpfhwl4Cw5DU8mn2ioKjcHiBANzS2_UoD79g2mYy2PddCu6ecadV93m4QHdEy3enZXzoZj2uS7BWyLySAzIBLrd7VXhipD4hovMXWpBPBuwI9Vi7--o1AHUuci0vaqZhbGgd4k42i2JhwwxbN3yvNtGYy7Z87tujxXZRQu2ZWn5BMUfGiGRP4CfZ7wJadyYAwkGn68gmgf6yxFpknfl6WgJ7Df3aCS9VOSDUUao-dYTfcm3WKW1kNWncZ2TiTU59CSDqSTUvxg15uAv8SiXTE4SAP_wMYD40hf5ts43AxeRMl-L03AVBpGa9qDXvK6RfMX3nydjQgWrGQI0QPcFQJM-3YeyLPLozScsd9zlR5SR1BK-heQIxtE1qJxAqyhn-gQvp94CH6uNTHX5rDnr7MeWWdCdaW7kXvU3FV8J88dPJovYX3D62YFxTYZTymxKThZ7YTbDpVgeyfEG1L-LcPepEKBmSL5gRby0tdT1UTNtPbJEAa_-oGt0=w166-h154-s-no-gm?authuser=0)
- The package.json file contains the information about the project ![Package JSON](https://lh3.googleusercontent.com/pw/ABLVV86AVny_M-_GRugzu4dipW8hdDbHg5eIs1M0fZIs0H_2a-1C3BzMQ_gCnPwtD-0VYU716yzuSQ3To5KscC0OkTQ6meCblaq7ctogs3lzaTkM1QBTPd7fZRqQ9UtEqu2O8L35Tx7CzV3uHpEkaEKytJJhVGYZxx4tognQvnsnvZ0dONcrFHUzhEkNfSaRaYVgDPjzxBTmSx9xWK3Wsf6oXr1finGMKcJYMrHX7sz-zEvKxScXaB8eZvKwg4kfXxhJ6rtDmyR5lFjPRMeb3reAPf84U6LlAT4pxUgW3EYIKyjzY2mIB35UE1AZrnwTVshbTqFJ5c83wrRy2C2sI_GfyDPeKIjZM2j03hw7rtZ_MBgv_QUymsDtdFB87Usr8XAhsfc9YP8UuFGxwhkHLFSnnItpgBr1NzIKIW3jivTbuO2K1-NZ_ApG2caD-NPc3FVPJCYqlyeRQWkVU_1h9SMRnkiqWG_wy5YEXrVe78Z_pyeJK3UdonSJTIpnYtK82laK4-mpFI7ZsCB0f3DTBBVpw5CAkg2P2DXQ8MYQOF00lAvjsrK5CNLidL6dPPwlML_RvFkaLLvtYbv8b1yVbtcb-wI-VAIN7DrjlD8FCPqk1A7rjSCHFJwgplEFOa6xLAB-euLdR-TUT0zg6C9GQMzvuXNvw9CI82KXWrGA7F5EPuS2FhDHgR-hXcB5tIyUmJwWyom78Wlt79YRjKIA9ty0rwFRZozNPd9SPUXhdBeyBKZqp55lC4JsfdInK1ceTrx7EDSrZm1-CB4UBfw7djgpsdMKV0nVVS758k7Q81Yf1SKnsVLG4cB5OsMealuRVeY7M2-OtNwy2ZNVLQSTdZu50UHwcbpiYTzqAkJb7-sKiIIZCUhlaysEf4ErNj3CGPiPnlJL=w958-h690-s-no-gm?authuser=0)
- Typescript Configurationfile is a bunch of settings for telling typescript compiler how to compile our code to JavaScript ![Typescript](https://lh3.googleusercontent.com/pw/ABLVV86g295JtD4mttkSbMRLrk_IDtng49lwBtuK7YiD6zDycgetZWJ83ZgZfVeHpScEDxPqc7By5AnaNM7AQeSUl3ZBV1-R5oTC5HCpwjGWuA3q0Cgnq5H33VtO-e4qLtHVQQOqXrrxRTOtyIbH1iITI4A0SIGN3DsGNBK9yI_HbLKwOXoiW4ttsMTr8Fh7PPbyWpmBmyhntxki8ppLG7uIajemJbj3USrohEjZ7gCG0H3l-diFUTn2jtip4hPoqSRyq10umGVtXIBV3DQQr9fy9fMX20Vc2A23sIkqIvibKeiPg102eTm3HgMS4tsDzQfsie4FLjD3dslPs1R6ETOUpAoo9qKqg-E9-cNfV2qEj5r-nLOvtVukOECdDtdV2jMBuwrs2Zh4LmFQ-etaiyEoh3ZKiQ7eKb5mjPDZkHcnldY2a5rVsv1DVGMhLxmvOpMzHNw8_C7LTW0q0pXAivkhOnLPuOuxIM-hpZjVxveIl_CNf4JDL2t9TyP0WXP9nFPwEHEstBmfCdO8sMPLLy5dFYhVDUoez0qu0wje-yyO9PNKsQbjYs2wlc_s7VtqZdtZxKssJwzRIffQFk97iGc15fUsA0-KYiH6gpCmNRBbzVsaQ8vMWaJ817KQQ3PkqpDgU6VVU-zEupZxLSo8oq_wIm7yH7WG-_q90v1RcRmnp9TH2awRFzIVJHbL8XxTq2fHDTqxtfbOL3OQjzJNcOOpsOT9FtvyeYd0BtKZUASRZxLU8dfCR82wubHMxjvdVaY4pWyZ3MpoFYoJvvjnhUfXnV67RLfoRmcCsDt2LqiKGxlBfc-j81kiEPMowFuzxfIQiqbjyJCARVXfSYV2JgMeRpg0NleJDkobLWzp609LtYBwoPlNIU_klw_J8FWsKMvdSPhF=w815-h576-s-no-gm?authuser=0)
- Configuration file for Vite  ![Vite](![image](https://github.com/tuanle03/Code_learn_spa/assets/136918096/a4372e28-e17c-49d9-a999-80d35ccfb538)
)

### Creating a React Components

In React, each component typically consists of two files: a .tsx file for the component's JavaScript/TypeScript logic and a .css file for its styling. This separation allows for clean code organization, where the .tsx file handles the component's functionality, and the .css file manages its visual styling.

Start by creating a new file for your component in the `src/components` directory. For example, to create a `Article` component:

- Main Components of Article.tsx:
  1. Imports:
**React:** Provides the functions and components necessary to build a user interface.
**./article.css:** Defines the styling for the Article component.
  2. Interface:
**ArticleProps:** Defines the properties that must be passed to the Article component.
  3. Component Definition:
**Article:** A React functional component that renders the article content.
  Takes ArticleProps as input.
  Defines a variable maxLength to limit the displayed text length.
  4. Rendered Elements:
  A container element with class fullArticle.
  Inside the container:
**headArticle:** Contains the title and author/date information.
**bodyArticle:** Shows the preview text and image
  5. Export:
  Makes the Article component available for other modules to use.
  ![Article TSX](https://drive.google.com/file/d/1lORf5qmmHPweMORSlM4Jrr6aFdPH5nqQ/view?usp=drive_link)

- Main Components of Article.css:
  This CSS file is a text file that contains style rules for HTML elements. It is used to control the appearance of a web page, such as the size, color, and position of elements.
  This CSS file is typically organized into two sections:
  **Selectors:** These are rules that specify which HTML elements the style rules apply to.
  **Declarations:** These are rules that define the properties of the HTML elements.
  ![Article CSS](https://drive.google.com/file/d/1Gw9_RRY2ify9kQR_yKon0ZUo2xD102PU/view?usp=drive_link)

## Demo
- The codebase demonstrates best practices in React and TypeScript, showcasing the elegant implementation of the Article component.
![Web Demo Code](https://drive.google.com/file/d/1vIcUZCQiuCSQuUJUOMNQyaPpWgiWJHVv/view?usp=drive_link)
- Experience the CodeLearn web application live! To run the application locally, use the command npm run dev to execute the main.tsx file for testing the code. After running the command, access the website to see the CodeLearn web application in action.
![Web Demo](https://drive.google.com/file/d/1DxxiKrEHaRlL39atr1dSmg2OPq4GmxKM/view?usp=drive_link)

## Contact Information

Feel free to reach out to us if you have any questions or need assistance. We're here to help!

### Lê Thanh Tuấn
- **Email:** [21520518@gm.uit.edu.vn](mailto:21520518@gm.uit.edu.vn)

### Phạm Thái Bảo
- **Email:** [21520156@gm.uit.edu.vn](mailto:21520156@gm.uit.edu.vn)

### Lê Thị Huyền Trang
- **Email:** [21522694@gm.uit.edu.vn](mailto:21522694@gm.uit.edu.vn)
  
### Huỳnh Hoa
- **Email:** [21522080@gm.uit.edu.vn](mailto:21522080@gm.uit.edu.vn)
