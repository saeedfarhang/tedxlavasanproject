import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/NavBar";
import PopUpDialog from "../components/PopUpDialog";
import Button from "../elements/Button";
import SponsorCard from "../elements/SponsorCard";
import TextField from "../elements/TextField";
import Typography from "../elements/Typography";

const Container = styled.div`
  .under-nav {
    height: 170px;
  }
  .title {
    margin: 0 0 40px 0;

    @media screen and (max-width: 485px) {
      margin: 0 0 20px 0;
    }
  }
  .sponsors-cards-container {
    margin: 0 9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  .sponsor-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  .sponsers {
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 620px) {
      grid-template-columns: repeat(3, 1fr);
    }
    justify-items: center;
    .slick-list {
      outline: none;
      direction: ltr;
      ::after {
        outline: none;
        direction: ltr;
      }
      ::before {
        outline: none;
        direction: ltr;
      }
    }
    .slick-slide {
      outline: none;
    }
  }
`;

export default function Sponsers() {
  const [sponsors, setSponsors] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    axios.get("data/sponsers.json").then((res) => setSponsors(res.data));
  });
  return (
    <Container>
      <NavBar activateLink={"sponsers"} />
      <div className="under-nav"></div>
      <Typography
        variant="h3"
        fontSize="20px"
        fontWeight="normal"
        className="title"
      >
        حامیان تدکس لواسان
      </Typography>
      <div className="sponsor-grid">
        <SponsorCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/sponser-logo/irancell.png`}
          web={"https://irancell.ir/"}
          selfPage
          key={4}
          id={4}
          bigSize
        />
        <div className="space-sponsors-big" style={{ width: "3%" }}></div>
        <SponsorCard
          imageUrl={`${process.env.PUBLIC_URL}/assets/sponser-logo/digikala.png`}
          web={"https://digikala.com/"}
          selfPage
          key={7}
          id={7}
          bigSize
        />
      </div>
      <div className="sponsers-container">
        <div className="sponsers">
          {sponsors.map(
            (sponser) =>
              !sponser.bigSize && (
                <SponsorCard
                  imageUrl={`${process.env.PUBLIC_URL}/${sponser.imageUrl}`}
                  web={sponser.web}
                  selfPage={sponser.selfPage ? sponser.selfPage : false}
                  key={sponser.id}
                  id={sponser.id}
                />
              )
          )}
        </div>
      </div>
      <div className="miss_sponser miss-form">
        <Typography textAlign="center" fontSize="16px" fontWeight="300">
          شما هم می‌توانید از تدکس لواسان حمایت کنید
        </Typography>
        <Button
          onClick={() => setOpenDialog(true)}
          className="btn"
          variant="fill"
        >
          اسپانسر شوید
        </Button>
      </div>

      <PopUpDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title="اسپانسر شوید"
        email_template="template_w9winaf"
      >
        <input type="hidden" value="sponsor" name="form_for" />
        <TextField
          name="name"
          label="نام و نام خانوادگی"
          helperText="نام و نام خانوادگی خود را وارد نمایید"
        />
        <TextField
          name="phone"
          label="شماره تماس"
          type="number"
          helperText="شماره تماس خود را وارد نمایید"
          style={{ marginTop: "20px" }}
        />
      </PopUpDialog>
      <FooterSection />
    </Container>
  );
}
