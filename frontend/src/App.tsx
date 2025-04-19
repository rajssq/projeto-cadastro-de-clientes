import { useEffect, useState, useRef, FormEvent } from "react"
import { FiTrash } from "react-icons/fi"
import { BiSolidCircle } from "react-icons/bi";
import { api } from './services/api'

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App() {

  const [customers, setCustomers] = useState<CustomerProps[]>([])
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    loadCustomers();
  }, [])

  async function loadCustomers(){
    const response = await api.get("/customers")
    setCustomers(response.data);
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    if (!nameRef.current || !emailRef.current) return;
    
    const response = await api.post("/customer", {
      name: nameRef.current.value,
      email: emailRef.current.value,
    })

    setCustomers(allCustomers => [...allCustomers, response.data])

    nameRef.current.value = "";
    emailRef.current.value = "";
    nameRef.current.focus();
  }

  async function handleDelete(id: string){
    try {
      await api.delete("/customer", {
        params: {
          id: id
        }
      });
      
      const allCustomers = customers.filter(customer => customer.id !== id)
      setCustomers(allCustomers);

    } catch(err){
      console.error("Erro ao deletar cliente:", err);
    }
  }


  return (
    <div className="w-full min-h-screen flex justify-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl flex justify-center font-medium text-white">Cadastro de Clientes</h1>
        <p className="text-gray-400 text-center">Cadastre seus clientes e gerencie-os facilmente.</p>
        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            className="p-2 mb-5 rounded-md bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o nome do cliente"
            ref={nameRef}
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            className="mb-5 p-2 rounded-md bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o email do cliente"
            ref={emailRef}
          />

          <input
            type="submit"
            className="p-2 rounded-md bg-blue-500 text-white font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="Cadastrar"
          />

        </form>

        <section className="flex flex-col gap-4">
        {customers.length === 0 ? (
          <p className="text-gray-400 text-center">Nenhum cliente cadastrado.</p>
        ) : (
          <>
            <h2 className="text-2xl font-medium text-white">Clientes Cadastrados:</h2>
            <p className="text-gray-400">Clique no ícone de lixeira para deletar o cliente.</p>
          </>
        )}

          {customers.map( (customer)=> (
            <article key={customer.id}
              className="w-full rounded-md p-2 relative  bg-gray-700 text-white placeholder:text-gray-400 hover:bg-gray-600 transition-colors duration-200">

              <p><span className="font-medium">Nome:</span> {customer.name}</p>
              <p><span className="font-medium">Email:</span> {customer.email}</p>
              <p className="flex items-center gap-1"><span className="font-medium">Status:</span> {customer.status ? <BiSolidCircle  size={15} color='#00d33f' /> : <BiSolidCircle  size={15} color='#e70000' />}</p>

              <button
                onClick={() => handleDelete(customer.id)}
                className="bg-red-500 w-7 h-7 flex items-center justify-center cursor-pointer rounded-lg absolute right-0 -top-2">
                
                <FiTrash size={18} color='#FFFFFF' />
              </button>
            </article>
          ))}

        </section>

      </main>
    </div>
  )
}