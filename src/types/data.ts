export interface IDataPoint extends Array<number> {
	0: number
	1: number
	2: number
	3: number
	4: number
	5: number
	6: number
	length: 7
}

export interface IDataPair {
	0: IDataPoint
	1: IDataPoint
	length: 2
}

export interface IDataItem {
	id: number
	data: IDataPair
}

export type TDataCollection = IDataItem[]
