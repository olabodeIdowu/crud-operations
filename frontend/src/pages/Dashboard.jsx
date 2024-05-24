import styled from 'styled-components';
import headerLogo from './../assets/Vector (2).png';
import nigeriaLogo from './../assets/NG.png';
import heroImage from './../assets/Mockup wrap.png';
import paymentImage from './../assets/Frame 48096374.png';
import savingsImage from './../assets/Group 48095808.png';
import virtualCardImage from './../assets/Group 48095809.png';
import creditBuilderImage from './../assets/Frame 1000004141.png';
import joinCredpalImage from './../assets/Group 48095810.png';
import appleImage from './../assets/Mobile app store badge.png';
import playstoreImage from './../assets/Mobile app store badge-2.png';
import footerImage from './../assets/Vector.png';
import reviews from '../dev_data/reviews/Reviews';
import info from '../dev_data/infos/Info';

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

export default function Dashboard() {
  return (
    <Main>
      <Container>
        <header style={{ background: '#006DF7', height: '50vh' }}>
          <nav
            style={{
              display: 'flex',
              padding: '1.2rem 6rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <img height={20} width="auto" src={headerLogo} alt="logo" />

              <ul
                style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              >
                <li
                  style={{
                    color: '#ffffff',
                    fontSize: '1.4rem',
                    cursor: 'pointer'
                  }}
                >
                  Products
                </li>
                <li
                  style={{
                    color: '#ffffff',
                    fontSize: '1.4rem',
                    cursor: 'pointer'
                  }}
                >
                  Business
                </li>
                <li
                  style={{
                    color: '#ffffff',
                    fontSize: '1.4rem',
                    cursor: 'pointer'
                  }}
                >
                  What We Do
                </li>
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <p
                style={{
                  color: '#ffffff',
                  fontSize: '1.4rem',
                  textTransform: 'uppercase'
                }}
              >
                faq
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer'
                }}
              >
                <img src={nigeriaLogo} alt="Nigeria" width={30} height={30} />
                <ion-icon name="caret-down-outline" />
              </div>
              <p
                style={{
                  background: '#ffffff',
                  padding: '10px',
                  cursor: 'pointer',
                  borderRadius: '25px',
                  fontSize: '1.4rem'
                }}
              >
                Download the Credpal app
              </p>
            </div>
          </nav>

          <figure
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '3.2rem',
              color: '#ffffff',
              padding: '5.4rem'
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '3.2rem',
                  color: '#ffffff',
                  padding: '1.4rem'
                }}
              >
                One App, all your Financial Needs
              </p>
              <p
                style={{
                  fontSize: '1.8rem',
                  padding: '1.4rem',
                  color: '#fafafa'
                }}
              >
                Take control of your finances on the go! Make payments, save,
                invest, and access credit - all with one easy-to-use app.
              </p>
            </div>
            <div>
              <img height={200} width={200} src={heroImage} alt="hero" />
            </div>
          </figure>
        </header>
        <figure>
          <p
            style={{
              textAlign: 'center',
              color: '#222',
              fontWeight: 800,
              padding: '1.2rem',
              fontSize: '40px',
              marginTop: '30px'
            }}
          >
            Our customers love us
          </p>
          <p style={{ textAlign: 'center', color: '#666', padding: '1.2rem' }}>
            Read what they have to say
          </p>
          <figure
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              columnGap: '1rem'
            }}
          >
            {reviews.map((r, i) => {
              return (
                <div
                  key={i}
                  style={{ background: '#F9FAFB', padding: '1.2rem 1rem' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <img
                      width={20}
                      height={20}
                      style={{ borderRadius: '50%' }}
                      src={r?.image}
                      alt="customer"
                    />
                    <p
                      style={{
                        color: '#444',
                        fontWeight: 700,
                        fontSize: '13px'
                      }}
                    >
                      {r?.name}
                    </p>
                  </div>
                  <p
                    style={{
                      color: '#00000',
                      marginBottom: '15px',
                      marginTop: '20px'
                    }}
                  >
                    {r?.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    {[0, 0, 0, 0, 0].map(s => {
                      return <ion-icon name="star" />;
                    })}
                  </div>
                </div>
              );
            })}
          </figure>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              justifyContent: 'right'
            }}
          >
            <ion-icon name="caret-back-outline" />
            <ion-icon name="caret-forward-outline" />
          </div>
        </figure>
        <figure
          style={{
            width: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '100px',
            padding: '40px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              width: '46rem'
            }}
          >
            <p
              style={{
                color: '##00164A',
                fontFamily: 'DM Sans',
                fontSize: '38px',
                fontWeight: 700
              }}
            >
              Payments
            </p>
            <p
              style={{
                color: '#2f2f2f',
                fontSize: '1.6rem',
                paddingTop: '10px',
                paddingBottom: '20px',
                fontFamily: 'Poppins',
                lineHeight: '32px'
              }}
            >
              Enjoy a secure, reliable and convenient way to pay. Whether you're
              paying for a purchase, subscription or any other type of payment,
              CredPal is designed to make the process fast and easy.
            </p>
            <div
              style={{
                width: '50%',
                background: '#3772FF',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              <p
                style={{
                  padding: '1.6rem 2.4rem',
                  textAlign: 'center',
                  color: '#FCFCFD'
                }}
              >
                Download App
              </p>
            </div>
          </div>
          <img
            width={200}
            height={200}
            style={{ display: 'block' }}
            src={paymentImage}
            alt="payment"
          />
        </figure>
        <figure
          style={{
            width: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '100px',
            padding: '40px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              width: '46rem'
            }}
          >
            <p
              style={{
                color: '##00164A',
                fontFamily: 'DM Sans',
                fontSize: '38px',
                fontWeight: 700
              }}
            >
              Savings
            </p>
            <p
              style={{
                color: '#2f2f2f',
                fontSize: '1.6rem',
                paddingTop: '10px',
                paddingBottom: '20px',
                fontFamily: 'Poppins',
                lineHeight: '32px'
              }}
            >
              Simplify your savings journey by setting a budget. Save with ease
              by setting goals, tracking your progress, and enabling automatic
              transfers with your bank account. Its that easy!
            </p>
            <div
              style={{
                width: '50%',
                background: '#3772FF',
                borderRadius: '25px',
                cursor: 'pointer'
              }}
            >
              <p
                style={{
                  padding: '1.6rem 2.4rem',
                  textAlign: 'center',
                  color: '#FCFCFD'
                }}
              >
                Download App
              </p>
            </div>
          </div>
          <img
            width={200}
            height={200}
            style={{ display: 'block' }}
            src={savingsImage}
            alt="payment"
          />
        </figure>
        <figure
          style={{
            width: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '100px',
            padding: '40px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              width: '46rem'
            }}
          >
            <p
              style={{
                color: '##00164A',
                fontFamily: 'DM Sans',
                fontSize: '38px',
                fontWeight: 700
              }}
            >
              Virtual Card
            </p>
            <p
              style={{
                color: '#2f2f2f',
                fontSize: '1.6rem',
                paddingTop: '10px',
                paddingBottom: '20px',
                fontFamily: 'Poppins',
                lineHeight: '32px'
              }}
            >
              Create a virtual credit or cash card, make secure online
              purchases, keep track of your spending, and have complete
              visibility of where your funds are going. With advanced security
              features, you have the ability to set spending limits and exert
              control over your spending.
            </p>
            <div
              style={{
                width: '50%',
                background: '#3772FF',
                borderRadius: '25px',
                cursor: 'pointer'
              }}
            >
              <p
                style={{
                  padding: '1.6rem 2.4rem',
                  textAlign: 'center',
                  color: '#FCFCFD'
                }}
              >
                Download App
              </p>
            </div>
          </div>
          <img
            width={200}
            height={200}
            style={{ display: 'block' }}
            src={virtualCardImage}
            alt="payment"
          />
        </figure>
        <figure
          style={{
            width: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '100px',
            padding: '40px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              width: '46rem'
            }}
          >
            <p
              style={{
                color: '##00164A',
                fontFamily: 'DM Sans',
                fontSize: '38px',
                fontWeight: 700
              }}
            >
              Credit Builder
            </p>
            <p
              style={{
                color: '#2f2f2f',
                fontSize: '1.6rem',
                paddingTop: '10px',
                paddingBottom: '20px',
                fontFamily: 'Poppins',
                lineHeight: '32px'
              }}
            >
              Fund your virtual card and make payments everywhere. Use your
              CredPal virtual card to make purchases both online and offline
              with ease, and benefit from our reward-rich programs.
            </p>
            <div
              style={{
                width: '50%',
                background: '#3772FF',
                borderRadius: '25px',
                cursor: 'pointer'
              }}
            >
              <p
                style={{
                  padding: '1.6rem 2.4rem',
                  textAlign: 'center',
                  color: '#FCFCFD'
                }}
              >
                Download App
              </p>
            </div>
          </div>
          <img
            width={200}
            height={200}
            style={{ display: 'block' }}
            src={creditBuilderImage}
            alt="payment"
          />
        </figure>
        <figure
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            columnGap: '1rem',
            marginTop: '20px',
            marginBottom: '40px'
          }}
        >
          {info.map((r, i) => {
            return (
              <div
                key={i}
                style={{ background: r?.color, padding: '1.2rem 1rem' }}
              >
                <img
                  width={30}
                  height={30}
                  style={{ display: 'block', marginBottom: '15px' }}
                  src={r?.image}
                  alt="payment"
                />
                <p
                  style={{
                    color: '#141416'
                  }}
                >
                  {r?.header}
                </p>
                <p
                  style={{
                    color: '#55555',
                    marginBottom: '15px',
                    marginTop: '20px'
                  }}
                >
                  {r?.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <p>Learn More</p>
                  <ion-icon name="caret-forward-outline" />
                </div>
              </div>
            );
          })}
        </figure>
        <figure
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: '#006DF7',
            height: '35vh',
            marginTop: '15px',
            paddingBottom: '20px'
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans',
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: '46.87px',
              color: '#ffffff',
              padding: '10px',
              fontSize: '3rem'
            }}
          >
            Start building your credit score today
          </p>
          <p
            style={{
              width: '80rem',
              textAlign: 'center',
              paddingTop: '10px',
              paddingBottom: '15px',
              fontSize: '2rem',
              color: '#ffffff'
            }}
          >
            Download our app to get started on your credit journey in Africa.
            Make the first move towards a better financial future today.
          </p>
          <p
            style={{
              background: '#ffffff',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '25px',
              fontSize: '1.4rem',
              color: '#3772FF',
              marginTop: '20px',
              marginBottom: '20px'
            }}
          >
            Download App
          </p>
        </figure>

        <figure
          style={{
            width: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '100px',
            padding: '40px',
            margin: '0 auto',
            background: '#f1f5ff',
            marginTop: '50px'
          }}
        >
          <div
            style={{
              width: '46rem'
            }}
          >
            <p
              style={{
                color: '##00164A',
                fontFamily: 'DM Sans',
                fontSize: '38px',
                fontWeight: 700
              }}
            >
              Join CredPal today
            </p>
            <p
              style={{
                color: '#2f2f2f',
                fontSize: '1.6rem',
                paddingTop: '10px',
                paddingBottom: '20px',
                fontFamily: 'Poppins',
                lineHeight: '32px'
              }}
            >
              Download the CredPal app and join millions of satisfied customers
              who are already using CredPal to access credit, make payments,
              invest & many more!
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <img
                width={100}
                height={40}
                style={{ display: 'block' }}
                src={appleImage}
                alt="payment"
              />
              <img
                width={100}
                height={40}
                style={{ display: 'block' }}
                src={playstoreImage}
                alt="payment"
              />
            </div>
          </div>
          <img
            width={200}
            height={200}
            style={{ display: 'block' }}
            src={joinCredpalImage}
            alt="payment"
          />
        </figure>

        <figure
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr'
          }}
        >
          <div>
            <img
              style={{
                height: '20px',
                width: 'auto',
                display: 'block',
                marginBottom: '25px'
              }}
              src={footerImage}
              alt="payment"
            />

            <p style={{ color: '#40444f', fontSize: '12px', width: 300 }}>
              CredPal is a revolutionary credit solution geared towards
              providing seamless credit access for businesses and individuals
              across developing economies.
            </p>
          </div>
          <div>
            <p
              style={{
                color: '#23262F',
                marginBottom: '25px',
                fontSize: '16px'
              }}
            >
              Products
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>
              CredPal Personal
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>
              CredPal Business
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>
              CredPal Lifestyle
            </p>
          </div>
          <div>
            <p
              style={{
                color: '#23262F',
                marginBottom: '25px',
                fontSize: '16px'
              }}
            >
              Legal
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>
              Customer Terms of use
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>
              Merchant Terms of service
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>Privacy Notice</p>
          </div>
          <div>
            <p
              style={{
                color: '#23262F',
                marginBottom: '25px',
                fontSize: '16px'
              }}
            >
              Support
            </p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>FAQs</p>
            <p style={{ color: '#40444f', fontSize: '12px' }}>Blog</p>
          </div>
          <div>
            <p
              style={{
                color: '#23262F',
                marginBottom: '25px',
                fontSize: '16px'
              }}
            >
              Get the app
            </p>
            <img
              width={100}
              height={40}
              style={{ display: 'block' }}
              src={appleImage}
              alt="payment"
            />
            <img
              width={100}
              height={40}
              style={{ display: 'block' }}
              src={playstoreImage}
              alt="payment"
            />
          </div>
        </figure>
        <p
          style={{
            color: '#40444f',
            fontSize: '12px',
            marginTop: '30px',
            paddingBottom: '30px'
          }}
        >
          CredPal financial services are offered by BishopGate Microfinance
          Bank, fully licensed and regulated by the Central bank of Nigeria.
          CredPal offers innovative financial solutions including payment,
          savings and credit services. Our credit solution allows businesses and
          individuals to buy anything and pay for it in instalments across
          online and offline merchants by providing them with instant access to
          credit at the point of checkout.
        </p>
      </Container>
    </Main>
  );
}
