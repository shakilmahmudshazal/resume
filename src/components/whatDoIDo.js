import React from 'react';
import Card from './card';
import { CodeIcon, DesignIcon, ProjectManagementIcon, LearningIcon } from './icon';

export default function Objective({ title }) {
    return (
        <div className='whatdoido-div'>
            <div className='title sub-section-title'>{title}</div>
            <div className="whatdoido">
                <div className='cards'>
                    <Card title="Development" CardIcon={CodeIcon}>
                        As a developer, I find myself most
                        captivated by the power and flexibility of
                        NEXT.js. I'm always eager to dive into new
                        projects that leverage NEXT.js and
                        discover innovative ways to create fast,
                        scalable, and user-friendly applications.
                    </Card>
                    <Card title="Mentoring" CardIcon={DesignIcon}>
                        I take great pride in mentoring junior developers.
                        Sharing knowledge, providing guidance, and seeing
                        their growth brings me immense satisfaction. I believe
                        in fostering a collaborative and supportive environment
                        where everyone can thrive and contribute to the team's
                        success.
                    </Card>
                    <Card title="Project Management" CardIcon={ProjectManagementIcon}>
                        Over the years, I have honed my skills in project
                        management. I enjoy orchestrating the various
                        aspects of software development projects,
                        ensuring they are completed on time, within budget,
                        and meet the highest quality standards.
                    </Card>
                    <Card title="Continuous Learning" CardIcon={LearningIcon}>
                        The tech industry is constantly evolving, and I am
                        committed to continuous learning. Whether it's exploring
                        new frameworks, attending workshops, or reading
                        the latest research, I strive to stay at the forefront
                        of technological advancements to bring innovative
                        solutions to the projects I work on.
                    </Card>
                </div>
            </div>
        </div>
    );
}
