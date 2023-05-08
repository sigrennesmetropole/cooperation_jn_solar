import {
  sortedHoursWith3amStart,
  stuffingData,
  convertDataForGraph,
  calculateIntersectionData,
  stuffingXAxis,
  generateXAxis,
  generateTickPositions,
} from '@/services/graphService'

describe('graphService', () => {
  test('sortedHoursWith3amStart', () => {
    const inputData = [
      ['01:00:00', 40],
      ['02:00:00', 10],
      ['03:00:00', 20],
      ['04:00:00', 30],
    ]
    const expectedResult = [20, 30, 40, 10]
    // @ts-ignore
    const result = sortedHoursWith3amStart(inputData)
    expect(result).toEqual(expectedResult)
  })

  test('stuffingData', () => {
    const inputData = [10, 20, 30, 40]
    const expectedResult = [
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    ]
    const result = stuffingData(inputData)
    expect(result).toEqual(expectedResult)
  })

  test('convertDataForGraph', () => {
    const inputData = [
      ['01:00:00', 40],
      ['02:00:00', 10],
      ['03:00:00', 20],
      ['04:00:00', 30],
    ]
    const expectedResult = [
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
      38, 39, 40, 37, 34, 31, 28, 25, 22, 19, 16, 13, 10,
    ]
    // @ts-ignore
    const result = convertDataForGraph(inputData)
    expect(result).toEqual(expectedResult)
  })

  test('calculateIntersectionData', () => {
    const productionData = [10, 20, 30, 40]
    const consommationData = [15, 25, 20, 45]
    const expectedResult = [10, 20, 20, 40]
    const result = calculateIntersectionData(productionData, consommationData)
    expect(result).toEqual(expectedResult)
  })

  test('stuffingXAxis', () => {
    const xAxis = ['3h', '4h', '5h', '6h']
    const expectedResult = [
      '3h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '4h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '5h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '6h',
    ]
    const result = stuffingXAxis(xAxis)
    expect(result).toEqual(expectedResult)
  })

  test('generateXAxis', () => {
    const result = generateXAxis()
    result.forEach((value, index) => {
      if (index % 10 === 0) {
        expect(value).toMatch(/^[0-9]{1,2}h$/)
      } else {
        expect(value).toEqual('')
      }
    })
  })

  test('generateTickPositions', () => {
    const xAxis = [
      '3h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '4h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '5h',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '6h',
    ]
    const expectedResult = [0, 10, 20, 30]
    const result = generateTickPositions(xAxis)
    expect(result).toEqual(expectedResult)
  })
})
