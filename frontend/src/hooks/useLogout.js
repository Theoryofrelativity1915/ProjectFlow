import { useNavigate } from 'react-router-dom'

function useLogout() {
  const navigate = useNavigate()
  fetch(process.env.LOGOUTAPI, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': true
    },
  }).then(() => {
    navigate('/login')
  })
}

export default useLogout
