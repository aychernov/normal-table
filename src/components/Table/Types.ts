export interface IAddress{
    street: any
    suite: any
    city: any
    zipcode: any
}

export interface IGeo{
    lat: string
    lng: string
}

export interface ICompany{
    name: string
    catchPhrase: string
    bs: string
}

export interface IUser {
    accessor: string
    id: number
    name: any
    username: any
    email: any
    address: IAddress
    geo: IGeo
    phone: any
    website: any
    company: ICompany
    body: any
    userId: any
    title: any

}
type EmailStatus = 'draft' | 'read' | 'unread';
