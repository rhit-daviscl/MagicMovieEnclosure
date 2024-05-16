CSSE 432 Project: Magic Movie Enclosure

This project is a Typescript, Next.js, React, and tRPC design that has a Prisma database hosted in its own docker container.

I thought up this project as a way to learn how netflix would host and stream their shows to their audiences.

What I do is upload a video file to an S3 bucket and an image file to the bucket.

Then I created a AWS CloudFront which is AWS's way of streaming S3 files.

With the CloudFront connected to my S3 bucket, Using the link it provides me and the S3 bucket's key, I can use that url to stream my file.

In my web app, I use a "video" component with the url to that CloudFront as the main source.

Then depending on the databases url stored locally, it will stream the requested movie/music that you selected.

_Future goals/goals if the project team was bigger:_

For this to be in a larger scale, I would have deployed the project and had a global database that stored all my links.
I would have also encrpyted my links so that no one could copy my viewing URL and watch it without my website.


__Guide for local setup__

To start the project, go into a terminal and make your way into the cloned repo.

Then type:
> docker compose up -d

After that runs, in the terminal type:
> code .

Once VS code launches, push 'Shift+J' to open the terminal page.

Once in the terminal page, type:
> npx prisma studio

This will open a webpage that will allow you to add database items. You will be required to create an S3 bucket and a CloudFront on AWS Services
Follow this link to guide you on that:
> https://www.youtube.com/watch?v=iCZ7KULNQys&t=596s&ab_channel=FelixYu

Once you have theses buckets and connections made, fill your s3 server with any streaming files that you want to watch later.
Then in the prisma studio, create database objects that with the links to the service like he shows in the video.



Then open another temrinal while keeping that one running and type:
> npm run dev

Enjoy watching your shows on the go wherever!

Author: Curtiss Davis