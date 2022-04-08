import { gql, GraphQLClient } from 'graphql-request';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaPlayCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const VideoDetails = ({ data }) => {
  console.log(data);
  const { title, description, mp4, tags, id, thumbnail } = data;
  const [playVideo, setPlayVideo] = useState(false);
  return playVideo ? (
    <div className="relative w-[100%] h-[90vh]">
      <div className="top-8 right-20 absolute">
        <MdCancel className='text-4xl font-bold text-red-500 z-[999] hover:text-btn'/>
      </div>
      <video
        className="w-[100%] h-[100%] relative"
        src={mp4.url}
        typeof="video/mp4"
        controls
      />
    </div>
  ) : (
    <div className="relative w-[100vw] h-[90vh] px-3 sm:px-6 md:px-12 lg:px-32 bg-bg">
      <Image
        className="opacity-[0.1]"
        src={thumbnail.url}
        alt="thumbnail"
        layout="fill"
        objectFit="cover"
      />

      <div className="flex flex-col space-y-5 absolute left-3 sm:left-6 md:left-12 lg:left-32 top-[20vh] ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          {title}
        </h1>
        <span className="w-96 md:w-[27rem] lg:w-[30rem] text-[1rem] md:text-lg lg:text-xl text-gray-400 font-bold">
          {description}
        </span>

        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex cursor-pointer items-center justify-center group w-40 h-12 rounded-lg hover:bg-btn border-2 border-btn">
              <IoMdArrowRoundBack className="text-xl text-white group-hover:font-bold" />
              <span className="text-3xl text-white group-hover:font-bold ml-1 tracking-wide">
                BACK
              </span>
            </div>
          </Link>

          <div
            onClick={() => setPlayVideo(true)}
            className="ml-6 flex cursor-pointer items-center justify-center group w-40 h-12 rounded-lg hover:bg-btn border-2 border-btn"
          >
            <FaPlayCircle className="text-xl text-white group-hover:font-bold" />
            <span className="text-3xl text-white group-hover:font-bold ml-1 tracking-wide">
              PLAY
            </span>
          </div>
        </div>

        <span className="text-base md:text-lg text-blue-400 font-bold">
          {tags.join(', ')}
        </span>
      </div>
    </div>
  );
};

export default VideoDetails;

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const url = process.env.GRAPH_CMS_ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const request = await graphQLClient.request(query, variables);

  const data = request.video;

  return {
    props: {
      data,
    },
  };
};
