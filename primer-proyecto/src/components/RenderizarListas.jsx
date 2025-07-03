export const RenderizarListas = () => {
    const family=["cecilia", "juan","samuel"]
  return (
    <><h1>Renderizar Listas</h1>
    {family.map(fam =>{
        return <p key={fam}>{fam}</p>
    })}
    </>
  )
}
