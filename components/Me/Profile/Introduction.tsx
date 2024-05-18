interface props {
  time: string;
}

function Introduction({ time }: props) {
  return (
    <div className="flex flex-col gap-3 px-3 py-2 border-2 border-gray-300 rounded-xl shadow-md">
      <div className="font-semibold text-lg">Giới thiệu</div>
      <div className="text-sm text-gray-500">
        Thành viên của Linguify từ {time}.
      </div>
    </div>
  );
}

export default Introduction;
