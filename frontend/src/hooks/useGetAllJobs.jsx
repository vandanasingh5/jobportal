import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () =>{
        try {
            const res = await axios.get(`https://jobportal-289s.onrender.com/api/v1/job/get?keyword=${searchedQuery}`, {withCredentials: true})
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs))
            }
        } catch (error) {
             console.log(error);
        }
        }
         fetchAllJobs();
    },[])
}

export default useGetAllJobs