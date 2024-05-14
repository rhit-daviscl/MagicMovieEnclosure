CSSE 432 Project: Magic Movie Enclosure

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