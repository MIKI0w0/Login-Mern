import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated, navigate]);


  const onSubmitted = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {RegisterErrors.map((error, i) => (
          <div className='bg-red-500 text-white p-2 my-2 rounded-md' key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmitted}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Nombre de usuario"
            className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && <p className='text-red-400 text-sm'>El nombre de usuario es requerido</p>}

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Correo electrónico"
            className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className='text-red-400 text-sm'>El correo electrónico es requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
            className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className='text-red-400 text-sm'>La contraseña es requerida</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 w-full transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;