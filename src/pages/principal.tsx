
import "../../src/index.css";
import { usePrincipal } from "../hooks/use-principal";
import { BoxInfo } from "../components/molecules/BoxInfo";

type Props = {
  back: () => void
}

export default function Page({ back}: Props) {
  const { historicals } = usePrincipal();
  return (
    <div className="w-full h-full">
      <div className="w-full h-full p-20 flex flex-col gap-4 overflow-y-auto">
        <div className="max-w-20">
          <button onClick={back} >Volver</button>
        </div>
        {historicals &&
          historicals.length > 0 &&
          historicals.map((val: any) => (
            <BoxInfo 
              habilidades={val.abilities} 
              name={val.name}
              peso={val.peso}
              tipo={"fuego"}
              url={val.url}
            />
          ))}
      </div>
    </div>
  );
}
