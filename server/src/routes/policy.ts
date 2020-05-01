import { Model, Document } from "mongoose";

type PolicyType = { name: string, description: string, for: string }

const UserPolicy: PolicyType[] = [
    { name: 'Admin', description:''}
]