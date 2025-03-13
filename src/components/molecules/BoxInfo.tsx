type Props = {
  url: string;
  name: string;
  tipo: string;
  peso: string;
  habilidades: string[];
};

export const BoxInfo = ({
  url = "",
  name = "",
  tipo = "",
  peso = "",
  habilidades = [],
}: Props) => {
  return (
    <div className="w-full h-100 border border-black rounded-sm flex flex-row">
      <img
        src={url}
        alt="photo"
        style={{
          width: '40%',
          minWidth: '10%',
          padding: 5,
          height: "100%",
          objectFit: "fill",
          backgroundColor: "white",
          borderRadius: 4
        }}
      />
      <div className="border-l border-l-black flex flex-col gap-4 p-10">
        <div className="w-full flex flex-row">
          <p className="text-gray-500" style={{ fontWeight: "bold" }}>
            Nombre:
          </p>
          <p className="text-gray-500 ml-2">{name}</p>
        </div>
        <div className="w-full flex flex-row">
          <p className="text-gray-500" style={{ fontWeight: "bold" }}>
            Tipo:
          </p>
          <p className="text-gray-500 ml-2">{tipo}</p>
        </div>
        <div className="w-full flex flex-row">
          <p className="text-gray-500" style={{ fontWeight: "bold" }}>
            Peso:
          </p>
          <p className="text-gray-500 ml-2">{peso}</p>
        </div>
        <div className="w-full flex flex-row">
          <p className="text-gray-500" style={{ fontWeight: "bold" }}>
            Habilidades:
          </p>
          <p className="text-gray-500 ml-2">
            {habilidades}
          </p>
        </div>
      </div>
    </div>
  );
};
