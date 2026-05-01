import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import { User } from '../types/store'

type UseAdminResult = {
  isAdmin: boolean
  isLoading: boolean
  user: User | null
}

export const useAdmin = (): UseAdminResult => {
  const { initialized, isAdmin, user } = useSelector(
    (state: RootState) => state.auth,
  )

  return {
    isAdmin,
    isLoading: !initialized,
    user,
  }
}
