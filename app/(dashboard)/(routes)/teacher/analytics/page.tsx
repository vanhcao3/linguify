import { redirect } from "next/navigation";
import { getAnalytics } from '@/actions/get-analytics'
import {currentUserId} from '@/lib/auth'
import {DataCard} from './_component/data-card'
import { Chart } from "./_component/chart";

const AnalyticsPage = async () => {
  const userId = await currentUserId();

  if(!userId) return redirect('/')

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard 
          label="Total course enrollment"
          value={totalSales}
        />
        <DataCard 
          label="Total course revenue"
          value={totalSales}
          shouldFormat
        />
      </div>
      <Chart 
          data={data}
      />
    </div>
  )
};

export default AnalyticsPage;
