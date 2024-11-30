import { useQuery } from '@tanstack/react-query';
import {
  FacilityPaginationRequest,
  FacilityPaginationResponse,
} from '../Types/Facility';
import { ApiResponse } from '../Types/ResponseType';
import { getData } from '../Services/http/getData';

function useFacilityPaginationQuery(req: FacilityPaginationRequest) {
  return useQuery({
    queryKey: ['facility', 'pagination'],
    queryFn: ({ signal }) =>
      getData<ApiResponse<FacilityPaginationResponse>>(
        'facilities/pagination-info',
        signal,
      ),
  });
}

export default useFacilityPaginationQuery;