import { api } from "@/services/axios"
import { Contractor } from "@/services/interfaces/Contractor"
import { Project } from "@/services/interfaces/Project"
import { Hired } from "@/services/interfaces/Hired"
import { Propose } from "@/services/interfaces/Propose"
import { IControllerResponse } from "@/services/interfaces/IControllerResponse"

export type CreateDataType = Contractor | Project | Hired | Propose
export type GetDataByIdType = Contractor | Project | Hired | Propose
export type GetDataByThirdIdType = Project | Propose
export type GetAllDataType = Project | Hired
export type UpdateDataType = Contractor | Project | Hired | Propose
export type DeleteDataType = Contractor | Project | Hired | Propose

export type ResourceType = 'contractor' | 'project' | 'hired' | 'propose'

export const useApiService = () => {

    const createData = async<CreateDataType>(resource: ResourceType, data: CreateDataType): Promise<IControllerResponse<GetDataByIdType>> => {
        const response = await api.post(resource, data)
        return response.data;
    }

    const getDataById = async <GetDataByIdType>(resource: ResourceType, id: string): Promise<IControllerResponse<GetDataByIdType>> => {
        const uri = resource + '/' + id
        const response = await api.get(uri)
        return response.data;
    }

    const getDataByThirdId = async <GetDataByThirdIdType>(resource: ResourceType, id: string): Promise<IControllerResponse<GetDataByThirdIdType>> => {
        const uri = `${resource}/${id}`
        const response = await api.get(uri)
        return response.data;
    }

    const getProposeByHiredId = async <Project>(id: string): Promise<IControllerResponse<Project>> => {
        const uri = `/propose/byHiredId/${id}`
        const response = await api.get(uri)
        return response.data;
    }

    const getProjectByContractorId = async <Project>(id: string): Promise<IControllerResponse<Project>> => {
        const uri = `/project/byContractorId/${id}`
        const response = await api.get(uri)
        return response.data;
    }

    const getAllData = async <GetAllDataType>(resource: ResourceType): Promise<IControllerResponse<GetAllDataType[]>> => {
        const response = await api.get(resource)
        return response.data;
    }

    const updateData = async <UpdateDataType>(resource: ResourceType, id: string, data: UpdateDataType): Promise<IControllerResponse<UpdateDataType>> => {
        const response = await api.put(resource + '/' + id, data)
        return response.data;
    }

    const deleteData = async <DeleteDataType>(resource: ResourceType, id: string): Promise<IControllerResponse<DeleteDataType>> => {
        const uri = resource + '/' + id
        const response = await api.delete(uri)
        return response.data;
    }

    return {
        getDataById,
        getDataByThirdId,
        getProposeByHiredId,
        getProjectByContractorId,
        getAllData,
        createData,
        updateData,
        deleteData,
    }
}