import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type Password = {
  id: number;
  title: string;
  username: string;
  password: string;
  url: string;
  notes: string;
  user_id: number;
};

interface Props {
  search: string;
}

export default function PasswordList({ search }: Props) {
  const { uid } = useParams();
  const [loading, setLoading] = useState(true);
  const [passwords, setPasswords] = useState<Password[]>([]);

  useEffect(() => {
    fetch('https://pwdapi.rajvikash-r2022cse.workers.dev/pwd/get-id/'+uid)
      .then(response => response.json())
      .then(data => {
        setPasswords(data.result.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching passwords:', error);
        setLoading(false); 
      });
  }, []);

  const filteredPasswords = passwords.filter(password => {
    return password.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {loading ? (

        
        <div className="items-center justify-center w-full flex">

<div className='loader'></div>

        </div>
      ) : (
        filteredPasswords.map(password => (
          <Link to={`/pwd/get-details/${password.id}/${uid}`} key={password.id}>
            <div className="bg-gray-200 rounded-lg p-4 mt-6 flex flex-row justify-between hover:text-blue-600">
              <h2 className="text-xl font-bold">{password.title}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600 lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
            </div>
          </Link>
        ))  
      )}
    </div>
  );
}