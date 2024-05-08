'use client';

import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function BlogDetail({ params }: { params: { blogId: string } }) {
  const { data, error, isLoading } = useSWR(``, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log(data);

  return <div>this is blog detail of {params.blogId}</div>;
}

export default BlogDetail;
