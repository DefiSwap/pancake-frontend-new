import { gql } from 'graphql-request'
import { ChartEntry } from 'state/info/types'
import { pattieswapDayDatasResponse } from '../types'
import { mappattieswapDayData, fetchChartDataWithAddress } from '../helpers'
import { getMultiChainQueryEndPointWithStableSwap, MultiChainName, multiChainStartTime } from '../../constant'

const getPoolChartData = async (
  chainName: MultiChainName,
  skip: number,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  try {
    const query = gql`
      query pattieswapDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {
        pattieswapDayDatas(
          first: 1000
          skip: $skip
          where: { pairAddress: $address, date_gt: $startTime }
          orderBy: date
          orderDirection: asc
        ) {
          date
          dailyVolumeUSD
          reserveUSD
        }
      }
    `
    const { pattieswapDayDatas } =
      (await getMultiChainQueryEndPointWithStableSwap(chainName)?.request<pattieswapDayDatasResponse>(query, {
        startTime: multiChainStartTime[chainName],
        skip,
        address,
      })) || {}
    const data = pattieswapDayDatas?.map(mappattieswapDayData)
    return { data, error: false }
  } catch (error) {
    console.error('Failed to fetch pool chart data', error)
    return { error: true }
  }
}

const fetchPoolChartData = async (
  chainName: MultiChainName,
  address: string,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  return fetchChartDataWithAddress(chainName, getPoolChartData, address)
}

export default fetchPoolChartData
