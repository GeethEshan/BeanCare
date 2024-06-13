import React from 'react';
import styled from 'styled-components';
import {
  Section, MainTitle, Title, SubTitle, Paragraph, Image, Grid, GridItem, Icon, IconGrid, IconGridItem, IconTitle
} from './styles/SectionStyles';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.png';


import icon1 from '../icons/icon1.jpg';
import icon2 from '../icons/icon2.png';
import icon3 from '../icons/icon3.jpg';
import icon4 from '../icons/icon4.png';
import icon5 from '../icons/icon5.png';
import icon6 from '../icons/icon6.jpg';
import icon7 from '../icons/icon7.png';
import icon8 from '../icons/icon8.png';
import icon9 from '../icons/icon9.png';

const References = styled.div`
  font-size: 0.9rem; /* Smaller font size for references */
`;

const ProjectScope = () => {
  return (
    <Section id="project-scope">
      <MainTitle>Project Scope</MainTitle>
      
      <Title>Literature Survey</Title>
      <Grid>
        <GridItem>
          <Image src={image1} alt="Literature Survey" />
        </GridItem>
        <GridItem>
          <Paragraph>
            In the realm of precision agriculture, the advent of machine learning (ML) and deep learning (DL) technologies has revolutionized crop disease diagnosis and yield prediction. For the identification of diseases in crops, convolutional neural networks (CNNs) have shown remarkable accuracy. Specifically, Inception and Xception models are widely recognized for their performance in image classification tasks, effectively diagnosing various plant diseases from images of affected plant parts. Studies have demonstrated the efficacy of these models in distinguishing among multiple diseases with high precision. Additionally, Long Short-Term Memory (LSTM) networks have proven adept at handling time-series data, making them suitable for predicting market trends and environmental factors such as rainfall. Integrating these models into agricultural practices not only enhances disease management but also aids in strategic planning for market and environmental conditions. This comprehensive approach leverages historical data to forecast future scenarios, thus empowering farmers with actionable insights for better crop management and market preparedness.
          </Paragraph>
          <SubTitle>References</SubTitle>
          <References>
            A. Krizhevsky, I. Sutskever, and G. E. Hinton, "ImageNet Classification with Deep Convolutional Neural Networks," Advances in Neural Information Processing Systems, vol. 25, pp. 1097-1105, 2012.<br/>
            C. Szegedy et al., "Rethinking the Inception Architecture for Computer Vision," in Proc. IEEE Conf. Computer Vision and Pattern Recognition, 2016, pp. 2818-2826.<br/>
            F. Chollet, "Xception: Deep Learning with Depthwise Separable Convolutions," in Proc. IEEE Conf. Computer Vision and Pattern Recognition, 2017, pp. 1251-1258.<br/>
            S. Hochreiter and J. Schmidhuber, "Long Short-Term Memory," Neural Computation, vol. 9, no. 8, pp. 1735-1780, 1997.<br/>
            J. Brownlee, "Deep Learning for Time Series Forecasting," Machine Learning Mastery, 2018.<br/>
            S. Mohanty, D. P. Hughes, and M. Salathé, "Using Deep Learning for Image-Based Plant Disease Detection," Frontiers in Plant Science, vol. 7, p. 1419, 2016.
          </References>
        </GridItem>
      </Grid>
      
      <Title>Research Gap</Title>
      <Grid>
        <GridItem>
          <IconGridItem>
            <Icon src={icon1} alt="Identification & Classification" />
            <IconTitle>Identification & Classification</IconTitle>
            <Paragraph>
              While CNNs like Inception and Xception have demonstrated high accuracy in disease identification, there is a need to improve the classification of disease severity, which is crucial for appropriate treatment recommendations.
            </Paragraph>
          </IconGridItem>
        </GridItem>
        <GridItem>
          <IconGridItem>
            <Icon src={icon2} alt="Severity Assessment" />
            <IconTitle>Severity Assessment</IconTitle>
            <Paragraph>
              Current models primarily focus on identifying the presence of diseases but often fail to assess the severity of infections. Developing models that can accurately measure disease severity will help in precise crop management.
            </Paragraph>
          </IconGridItem>
        </GridItem>
        <GridItem>
          <IconGridItem>
            <Icon src={icon3} alt="Information Sharing" />
            <IconTitle>Information Sharing</IconTitle>
            <Paragraph>
              There is a gap in integrating disease prediction and market forecasting models into a unified platform that provides comprehensive insights to farmers. Enhancing information sharing and accessibility will support better decision-making in agriculture.
            </Paragraph>
          </IconGridItem>
        </GridItem>
      </Grid>
      
      <Title>Research Problem & Solution</Title>
      <Grid>
        <GridItem>
          <SubTitle>Proposed Problem</SubTitle>
          <Paragraph>Despite significant advancements in machine learning and deep learning technologies, there remain notable challenges in the precise and timely diagnosis of crop diseases and accurate prediction of market trends and environmental conditions. Current models primarily focus on identifying the presence of diseases but often fall short in assessing the severity and providing actionable insights for disease management. Additionally, there is a lack of integration between disease prediction models and market forecasting tools, resulting in fragmented information that hinders farmers' ability to make informed decisions. This gap in comprehensive, real-time data analysis and the absence of a unified platform for disease diagnosis, market prediction, and environmental forecasting pose significant hurdles to optimizing crop management and enhancing agricultural productivity.</Paragraph>
          <SubTitle>Proposed Solution</SubTitle>
          <Paragraph>The proposed solution aims to develop a comprehensive agricultural intelligence platform that integrates advanced machine learning and deep learning models to address the identified challenges. By leveraging Inception and Xception models for the accurate diagnosis of bean pod and leaf diseases, and employing Long Short-Term Memory (LSTM) networks for predicting market prices and rainfall, the platform provides a holistic approach to crop management. The system will feature a user-friendly interface where farmers can upload images of bean pods and leaves to receive precise disease identification and severity assessment. Additionally, the platform will offer predictive insights into market trends and environmental conditions, enabling strategic planning and timely interventions. This unified solution will empower farmers with actionable data, enhancing their ability to manage crops effectively and improve overall agricultural outcomes.</Paragraph>
        </GridItem>
        <GridItem>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/KPPjaKNbbyk?si=N5UEtmnK5jVLbS0o"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        </GridItem>
      </Grid>
      
      <Title>Research Objectives</Title>
      <Grid>
        <GridItem>
          <SubTitle>To Develop an Accurate Disease Diagnosis System for Bean Pods</SubTitle>
          <Paragraph>The first research objective is to create a robust system for diagnosing bacterial blight, anthracnose, and white mold in bean pods using advanced deep learning models. By employing the Inception model, the system aims to achieve high precision in identifying these diseases from uploaded images. This objective focuses on enhancing the diagnostic accuracy and speed, providing farmers with reliable information to manage and treat infections promptly, thereby reducing crop loss and improving yield quality.</Paragraph>
        </GridItem>
        <GridItem>
          <SubTitle>To Implement a Bean Leaf Disease Detection Model</SubTitle>
          <Paragraph>The second objective is to develop an effective model for detecting bean rust and angular leaf spot in bean leaves. Utilizing the Xception model, this component will focus on accurately identifying these diseases through image analysis. The goal is to equip farmers with a tool that can quickly and correctly diagnose leaf diseases, facilitating early intervention and effective disease management, which is critical for maintaining healthy crops and maximizing agricultural productivity.</Paragraph>
        </GridItem>
        <GridItem>
          <SubTitle>To Forecast Bean Market Prices Using LSTM Networks</SubTitle>
          <Paragraph>The third objective aims to predict the upcoming month’s market retail and wholesale prices for beans using Long Short-Term Memory (LSTM) networks. By analyzing previous months' market price data, the system will provide farmers with predictive insights into market trends. This objective focuses on enhancing market preparedness and helping farmers make informed decisions about selling and pricing their produce, ultimately improving their economic outcomes and market competitiveness.</Paragraph>
        </GridItem>
        <GridItem>
          <SubTitle>To Predict Rainfall for Improved Agricultural Planning</SubTitle>
          <Paragraph>The fourth objective is to develop a model that accurately predicts the upcoming month’s rainfall using LSTM networks. By leveraging historical rainfall data, the system will offer reliable forecasts to assist farmers in planning their agricultural activities. This objective aims to optimize water resource management, schedule planting and harvesting times effectively, and mitigate the risks associated with weather variability. Accurate rainfall predictions will empower farmers to make data-driven decisions, enhancing crop health and productivity while reducing the potential impacts of adverse weather conditions.</Paragraph>
        </GridItem>
      </Grid>
      
      <Title>Methodology</Title>
      <Grid>
        <GridItem>
          <Image src={image2} alt="Methodology" />
        </GridItem>
        <GridItem>
          <Paragraph>Our project, the "Comprehensive Agricultural Intelligence Platform for Beans," employs a multi-faceted approach to achieve its objectives. For the diagnosis of diseases in bean pods and leaves, we utilize deep learning models such as Inception and Xception, trained on datasets containing images of diseased bean pods and leaves, respectively. These models employ convolutional neural networks (CNNs) to accurately classify and identify bacterial blight, anthracnose, white mold, bean rust, and angular leaf spot from uploaded images.

For predicting market prices, we employ Long Short-Term Memory (LSTM) networks trained on historical market data to forecast retail and wholesale prices for beans in the upcoming month. Additionally, we utilize LSTM models to predict rainfall for the same period based on past weather data.

Our methodology integrates machine learning algorithms with domain-specific data to provide accurate and timely insights into bean farming, aiding farmers in making informed decisions regarding disease management, pricing strategies, and agricultural planning.</Paragraph>
        </GridItem>
      </Grid>
      
      <Title>Technologies Used</Title>
      <IconGrid>
        <IconGridItem>
          <Icon src={icon4} alt="Tech 1" />
          <IconTitle>Python</IconTitle>
        </IconGridItem>
        <IconGridItem>
          <Icon src={icon5} alt="Tech 2" />
          <IconTitle>React</IconTitle>
        </IconGridItem>
        <IconGridItem>
          <Icon src={icon6} alt="Tech 3" />
          <IconTitle>Tensorflow</IconTitle>
        </IconGridItem>
        <IconGridItem>
          <Icon src={icon7} alt="Tech 4" />
          <IconTitle>Keras</IconTitle>
        </IconGridItem>
        <IconGridItem>
          <Icon src={icon8} alt="Tech 5" />
          <IconTitle>Flask</IconTitle>
        </IconGridItem>
        <IconGridItem>
          <Icon src={icon9} alt="Tech 6" />
          <IconTitle>OpenCV</IconTitle>
        </IconGridItem>
      </IconGrid>
    </Section>
  );
};

export default ProjectScope;
