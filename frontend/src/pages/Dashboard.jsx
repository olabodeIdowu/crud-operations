import styled from "styled-components";


const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 2.6rem;
  width: auto;
`;

export default function Dashboard() {
  return (
 
      <Main>
     <Container>
      <header style={{background: "#006DF7", height: "50vh"}}>
      <nav style={{display: "flex", padding: "1.2rem 6rem", alignItems: "center", justifyContent: "space-between"}}>
        <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
        <StyledLogo>
      <Img src="./../dev_data/img/Vector (2).png" alt="logo" />
    </StyledLogo>
          <ul style={{display: "flex", alignItems: "center", gap: "2rem"}}>
            <li style={{color: "#ffffff", size: "1.4rem"}}>Products</li>
            <li style={{color: "#ffffff", size: "1.4rem"}}>Business</li>
            <li style={{color: "#ffffff", size: "1.4rem"}}>What We Do</li>
          </ul>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
        <p style={{color: "#ffffff", size: "1.4rem", textTransform: "uppercase"}}>faq</p>
        <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
          <Img src="./../dev_data/img/NG.png" alt="NG" />
         <ion-icon name="caret-down-outline"></ion-icon>
      </div>
     <p style={{background: "#ffffff", padding: "10px", cursor: "pointer", borderRadius: "25px"}}>Download the Credpal app</p>
        </div>
      </nav>

      <figure style={{display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "3.2rem", color: "#ffffff", padding: "2.4rem"}}>
<div>
  <p style={{fontSize: "5.2rem", color: "#ffffff", padding: "1.4rem"}}>One App, all your Financial Needs</p>
  <p style={{fontSize: "1.8rem",padding: "1.4rem", color: "#fafafa"}}>Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.</p>
</div>
<div>
<p style={{width: "50rem"}}> IMAGE</p>
{/* <image height={350} width={200} src="./../dev_data/img/Mockup wrap.png" alt="hero" /> */}
</div>
      </figure>
      </header> 
      <figure>
        <p style={{textAlign: "center", color: "#222", fontWeight: 800, padding: "1.2rem"}}></p>
        <p style={{textAlign: "center", color: "#666", padding: "1.2rem"}}></p>
        <div style={{display: "flex", alignItems: "center", gap: "1rem"}}></div>
      </figure>
     </Container>
     </Main>
  
  );
}

