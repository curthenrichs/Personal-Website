import React from 'react';

import { ProjectDigests as data } from '../content/projects';
import ProjectCard from './ProjectCard';

import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Title } = Typography;


function SectionProjects(props) {

  const { width } = props;

  return (
    <div>
      <Title>Projects</Title>
      <br/>
      <br/>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {data.map((entry, idx) => (
          <Col flex="auto" xs={24} xl={8} key={idx}>
            <ProjectCard
              digest={entry}
              width={width}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SectionProjects;