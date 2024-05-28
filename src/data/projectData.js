import Project1 from '../assets/images/project/project-1-1.jpg';
import Project2 from '../assets/images/project/project-1-2.jpg';
import Project3 from '../assets/images/project/project-1-3.jpg';
import Project4 from '../assets/images/project/project-1-4.jpg';
import Project5 from '../assets/images/project/project-1-5.jpg';
import Project6 from '../assets/images/project/project-1-6.jpg';
export const projectData =  [
      {
        "project_id": "001",
        "company_info": {
          "name": "Tech Innovators Inc.",
          "address": "1234 Innovation Way, Tech City, TX 75001",
          "contact_person": "Jane Doe",
          "email": "jane.doe@techinnovators.com",
          "phone": "+1254 433 657"
        },
        "project_details": {
          "title": "AI-Powered Customer Service",
          "description": "Developing an AI-powered chatbot to enhance customer service and support.",
          "problem": "Current customer service response times are too slow and inconsistent.",
          "solution": "Implement an AI chatbot that can handle common customer queries and direct complex issues to human representatives.",
          "duration": "6 months",
          "start_date": "2024-06-01",
          "end_date": "2024-12-01",
          "budget": "$200,000",
          image:Project1,
        },
        "objectives": [
          "Reduce average customer service response time by 50%",
          "Increase customer satisfaction scores by 20%",
          "Automate 70% of customer queries"
        ],
        "goals": [
          "Deploy AI chatbot on website and mobile app",
          "Integrate chatbot with existing CRM system",
          "Train customer service team on using the new system"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Requirement Analysis and Planning",
            "due_date": "2024-06-15",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "Prototype Development",
            "due_date": "2024-08-01",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Testing and QA",
            "due_date": "2024-10-01",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "Deployment and Training",
            "due_date": "2024-11-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "John Smith",
            "role": "Project Manager",
            "email": "john.smith@techinnovators.com",
            "phone": "+1-800-123-4568"
          },
          {
            "name": "Emily Davis",
            "role": "Lead Developer",
            "email": "emily.davis@techinnovators.com",
            "phone": "+1-800-123-4569"
          },
          {
            "name": "Michael Brown",
            "role": "QA Engineer",
            "email": "michael.brown@techinnovators.com",
            "phone": "+1-800-123-4570"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Delays in chatbot development",
            "mitigation": "Allocate additional resources and extend timeline if necessary"
          },
          {
            "risk": "Integration issues with CRM",
            "mitigation": "Conduct early integration tests and plan for potential adjustments"
          },
          {
            "risk": "Customer resistance to using AI",
            "mitigation": "Provide training and educational materials to customers"
          }
        ],
        "success_metrics": [
          "Average response time reduced by 50%",
          "Customer satisfaction scores increased by 20%",
          "70% of customer queries handled by AI"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Project Plan",
            "url": "http://example.com/project-plan.pdf"
          },
          {
            "document_id": "doc2",
            "title": "Requirements Specification",
            "url": "http://example.com/requirements-specification.pdf"
          }
        ],
        "additional_notes": "Ensure continuous monitoring and improvement of the AI system post-deployment."
      },
      {
        "project_id": "003",
        "company_info": {
          "name": "NextGen Recruiters",
          "address": "9101 Talent Drive, Recruit City, CA 90001",
          "contact_person": "Bob Harris",
          "email": "bob.harris@nextgenrecruiters.com",
          "phone": "+1-800-123-7890"
        },
        "project_details": {
          "title": "AI-Driven Recruitment Platform",
          "description": "Building an AI-driven platform to streamline the recruitment process and enhance candidate matching.",
          "problem": "Manual recruitment processes are time-consuming and often result in poor candidate matches.",
          "solution": "Develop an AI-powered recruitment platform that automates candidate screening and improves matching accuracy.",
          "duration": "8 months",
          "start_date": "2024-08-01",
          "end_date": "2025-03-31",
          "budget": "$300,000",
          image:Project2,
        },
        "objectives": [
          "Reduce time-to-hire by 40%",
          "Improve candidate-job match accuracy by 30%",
          "Automate 60% of the recruitment process"
        ],
        "goals": [
          "Develop and deploy AI algorithms for candidate screening",
          "Integrate the platform with existing HR systems",
          "Train recruitment staff on the new platform"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Requirement Gathering and Analysis",
            "due_date": "2024-08-31",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "AI Algorithm Development",
            "due_date": "2024-11-15",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Platform Integration",
            "due_date": "2025-01-30",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "User Training and Testing",
            "due_date": "2025-03-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "Anna Green",
            "role": "Project Manager",
            "email": "anna.green@nextgenrecruiters.com",
            "phone": "+1-800-123-7891"
          },
          {
            "name": "James Walker",
            "role": "Lead Data Scientist",
            "email": "james.walker@nextgenrecruiters.com",
            "phone": "+1-800-123-7892"
          },
          {
            "name": "Lisa Adams",
            "role": "Software Engineer",
            "email": "lisa.adams@nextgenrecruiters.com",
            "phone": "+1-800-123-7893"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Inaccurate AI predictions",
            "mitigation": "Conduct thorough testing and continuous learning adjustments"
          },
          {
            "risk": "Integration challenges with existing systems",
            "mitigation": "Early integration testing and close collaboration with IT teams"
          },
          {
            "risk": "User resistance to new technology",
            "mitigation": "Comprehensive training and support"
          }
        ],
        "success_metrics": [
          "40% reduction in time-to-hire",
          "30% improvement in candidate-job match accuracy",
          "60% automation of the recruitment process"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Project Proposal",
            "url": "http://example.com/project-proposal.pdf"
          },
          {
            "document_id": "doc2",
            "title": "AI Algorithm Documentation",
            "url": "http://example.com/ai-documentation.pdf"
          }
        ],
        "additional_notes": "Ensure regular updates and improvements to the AI algorithms based on user feedback and performance metrics."
      },
      {
        "project_id": "002",
        "company_info": {
          "name": "Global HR Solutions",
          "address": "5678 HR Avenue, Workforce City, NY 10001",
          "contact_person": "Alice Johnson",
          "email": "alice.johnson@globalhrsolutions.com",
          "phone": "+1-800-987-6543"
        },
        "project_details": {
          "title": "Employee Engagement Improvement Program",
          "description": "Developing a comprehensive program to enhance employee engagement and satisfaction.",
          "problem": "Low employee engagement scores and high turnover rates.",
          "solution": "Implement a series of initiatives aimed at boosting employee morale, recognition, and involvement.",
          "duration": "12 months",
          "start_date": "2024-07-01",
          "end_date": "2025-06-30",
          "budget": "$150,000",
          image:Project3,
        },
        "objectives": [
          "Increase employee engagement scores by 25%",
          "Reduce employee turnover by 15%",
          "Enhance internal communication channels"
        ],
        "goals": [
          "Conduct employee engagement surveys quarterly",
          "Launch a recognition and rewards program",
          "Implement new internal communication tools"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Initial Assessment and Planning",
            "due_date": "2024-07-31",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "Implementation of Engagement Initiatives",
            "due_date": "2024-10-01",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Mid-Project Review",
            "due_date": "2025-01-15",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "Final Evaluation and Reporting",
            "due_date": "2025-06-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "Mark Thompson",
            "role": "Project Manager",
            "email": "mark.thompson@globalhrsolutions.com",
            "phone": "+1-800-987-6544"
          },
          {
            "name": "Sara Lee",
            "role": "HR Specialist",
            "email": "sara.lee@globalhrsolutions.com",
            "phone": "+1-800-987-6545"
          },
          {
            "name": "David White",
            "role": "Communication Manager",
            "email": "david.white@globalhrsolutions.com",
            "phone": "+1-800-987-6546"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Low participation in engagement surveys",
            "mitigation": "Offer incentives for survey completion and ensure anonymity"
          },
          {
            "risk": "Resistance to new communication tools",
            "mitigation": "Provide comprehensive training and support"
          },
          {
            "risk": "Insufficient budget allocation",
            "mitigation": "Seek additional funding or reallocate resources"
          }
        ],
        "success_metrics": [
          "25% increase in employee engagement scores",
          "15% reduction in employee turnover",
          "Successful implementation of new communication tools"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Project Charter",
            "url": "http://example.com/project-charter.pdf"
          },
          {
            "document_id": "doc2",
            "title": "Engagement Survey Results",
            "url": "http://example.com/survey-results.pdf"
          }
        ],
        "additional_notes": "Regularly review and adjust the program based on feedback and performance metrics."
      },
      {
        "project_id": "004",
        "company_info": {
          "name": "Compliance Solutions Inc.",
          "address": "1212 Policy Drive, Regulation City, IL 60007",
          "contact_person": "Rachel Adams",
          "email": "rachel.adams@compliancesolutions.com",
          "phone": "+1-800-555-1212"
        },
        "project_details": {
          "title": "Employee-Employer Rules Development",
          "description": "Creating a comprehensive set of rules and guidelines to ensure legal compliance and smooth operations.",
          "problem": "Lack of clear policies leading to inconsistencies and potential legal issues.",
          "solution": "Develop and implement a standardized set of rules covering all aspects of employee-employer relations.",
          "duration": "4 months",
          "start_date": "2024-09-01",
          "end_date": "2024-12-31",
          "budget": "$50,000",
          image:Project4,
        },
        "objectives": [
          "Ensure 100% legal compliance with labor laws",
          "Reduce workplace disputes by 40%",
          "Improve clarity and consistency in policy enforcement"
        ],
        "goals": [
          "Review existing policies and identify gaps",
          "Develop new comprehensive rulebook",
          "Conduct training sessions for management and employees"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Policy Review and Gap Analysis",
            "due_date": "2024-09-15",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "Drafting New Rules",
            "due_date": "2024-10-30",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Approval and Finalization",
            "due_date": "2024-11-30",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "Training and Implementation",
            "due_date": "2024-12-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "Laura Mitchell",
            "role": "Policy Analyst",
            "email": "laura.mitchell@compliancesolutions.com",
            "phone": "+1-800-555-1213"
          },
          {
            "name": "Peter Johnson",
            "role": "Legal Advisor",
            "email": "peter.johnson@compliancesolutions.com",
            "phone": "+1-800-555-1214"
          },
          {
            "name": "Sophie Brown",
            "role": "HR Manager",
            "email": "sophie.brown@compliancesolutions.com",
            "phone": "+1-800-555-1215"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Resistance to new policies",
            "mitigation": "Involve employees in the policy development process and provide clear explanations"
          },
          {
            "risk": "Legal challenges",
            "mitigation": "Consult with legal experts and ensure thorough review"
          },
          {
            "risk": "Inconsistent policy enforcement",
            "mitigation": "Conduct comprehensive training and regular audits"
          }
        ],
        "success_metrics": [
          "100% legal compliance",
          "40% reduction in workplace disputes",
          "Positive feedback from employees and management on policy clarity"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Policy Gap Analysis Report",
            "url": "http://example.com/gap-analysis-report.pdf"
          },
          {
            "document_id": "doc2",
            "title": "Employee Rulebook",
            "url": "http://example.com/employee-rulebook.pdf"
          }
        ],
        "additional_notes": "Monitor policy effectiveness and update regularly based on feedback and legal changes."
      },
      {
        "project_id": "005",
        "company_info": {
          "name": "Wellness First Corp.",
          "address": "3456 Health Blvd, Wellness Town, CA 94016",
          "contact_person": "Karen White",
          "email": "karen.white@wellnessfirst.com",
          "phone": "+1-800-222-3333"
        },
        "project_details": {
          "title": "Employee Welfare and Performance Enhancement",
          "description": "Implementing programs to improve employee welfare and boost performance.",
          "problem": "Low employee morale and productivity affecting overall company performance.",
          "solution": "Develop wellness programs, performance incentives, and a supportive work environment.",
          "duration": "10 months",
          "start_date": "2024-09-01",
          "end_date": "2025-06-30",
          "budget": "$100,000",
          image:Project5,
        },
        "objectives": [
          "Improve overall employee health and wellbeing",
          "Increase productivity by 20%",
          "Enhance job satisfaction and reduce absenteeism"
        ],
        "goals": [
          "Introduce employee wellness programs (fitness, mental health support, etc.)",
          "Implement performance-based incentives and recognition",
          "Create a feedback system for continuous improvement"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Needs Assessment and Planning",
            "due_date": "2024-09-30",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "Launch Wellness Programs",
            "due_date": "2024-12-01",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Introduce Performance Incentives",
            "due_date": "2025-02-28",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "Establish Feedback Mechanisms",
            "due_date": "2025-04-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "Tom Edwards",
            "role": "Project Manager",
            "email": "tom.edwards@wellnessfirst.com",
            "phone": "+1-800-222-3334"
          },
          {
            "name": "Linda Carter",
            "role": "Wellness Coordinator",
            "email": "linda.carter@wellnessfirst.com",
            "phone": "+1-800-222-3335"
          },
          {
            "name": "Robert Green",
            "role": "Performance Analyst",
            "email": "robert.green@wellnessfirst.com",
            "phone": "+1-800-222-3336"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Low participation in wellness programs",
            "mitigation": "Promote programs effectively and offer incentives for participation"
          },
          {
            "risk": "Budget constraints",
            "mitigation": "Seek external funding or partnerships to support initiatives"
          },
          {
            "risk": "Difficulty in measuring performance improvements",
            "mitigation": "Implement clear metrics and regular monitoring"
          }
        ],
        "success_metrics": [
          "Increase in employee health and wellbeing scores",
          "20% increase in productivity",
          "Reduction in absenteeism and increase in job satisfaction"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Wellness Program Plan",
            "url": "http://example.com/wellness-program-plan.pdf"
          },
          {
            "document_id": "doc2",
            "title": "Performance Incentive Structure",
            "url": "http://example.com/performance-incentive-structure.pdf"
          }
        ],
        "additional_notes": "Regularly review the impact of the programs and make adjustments based on feedback and performance data."
      },
      {
        "project_id": "006",
        "company_info": {
          "name": "Innovative Solutions Ltd.",
          "address": "7890 Future Way, Techville, TX 75001",
          "contact_person": "Michael Brown",
          "email": "michael.brown@innovativesolutions.com",
          "phone": "+1-800-555-6789"
        },
        "project_details": {
          "title": "Remote Work Infrastructure and Culture Development",
          "description": "Creating a robust remote work infrastructure and fostering a positive remote work culture.",
          "problem": "The company lacks a cohesive remote work strategy, resulting in reduced productivity and employee dissatisfaction.",
          "solution": "Develop and implement a comprehensive remote work strategy, including technology infrastructure, communication tools, and a supportive culture.",
          "duration": "6 months",
          "start_date": "2024-07-01",
          "end_date": "2024-12-31",
          "budget": "$200,000",
          image:Project6,
        },
        "objectives": [
          "Establish a reliable and secure remote work infrastructure",
          "Improve remote employee productivity by 25%",
          "Enhance communication and collaboration among remote teams"
        ],
        "goals": [
          "Implement secure VPN and remote desktop solutions",
          "Introduce collaboration tools such as Slack and Zoom",
          "Create a remote work policy and guidelines"
        ],
        "milestones": [
          {
            "milestone_id": "m1",
            "title": "Assessment and Planning",
            "due_date": "2024-07-31",
            "status": "completed"
          },
          {
            "milestone_id": "m2",
            "title": "Technology Implementation",
            "due_date": "2024-09-15",
            "status": "in_progress"
          },
          {
            "milestone_id": "m3",
            "title": "Policy Development",
            "due_date": "2024-10-30",
            "status": "pending"
          },
          {
            "milestone_id": "m4",
            "title": "Training and Rollout",
            "due_date": "2024-12-15",
            "status": "pending"
          }
        ],
        "team_members": [
          {
            "name": "Susan Parker",
            "role": "IT Manager",
            "email": "susan.parker@innovativesolutions.com",
            "phone": "+1-800-555-6780"
          },
          {
            "name": "John Davis",
            "role": "HR Specialist",
            "email": "john.davis@innovativesolutions.com",
            "phone": "+1-800-555-6781"
          },
          {
            "name": "Emily Thompson",
            "role": "Communications Manager",
            "email": "emily.thompson@innovativesolutions.com",
            "phone": "+1-800-555-6782"
          }
        ],
        "risks_and_mitigations": [
          {
            "risk": "Technical issues with remote infrastructure",
            "mitigation": "Conduct thorough testing and provide IT support"
          },
          {
            "risk": "Employee resistance to new tools and policies",
            "mitigation": "Provide comprehensive training and gather feedback"
          },
          {
            "risk": "Data security concerns",
            "mitigation": "Implement strong security measures and conduct regular audits"
          }
        ],
        "success_metrics": [
          "25% increase in remote employee productivity",
          "High adoption rates of new collaboration tools",
          "Positive employee feedback on remote work culture"
        ],
        "documents": [
          {
            "document_id": "doc1",
            "title": "Remote Work Policy",
            "url": "http://example.com/remote-work-policy.pdf"
          },
          {
            "document_id": "doc2",
            "title": "Technology Implementation Plan",
            "url": "http://example.com/tech-implementation-plan.pdf"
          }
        ],
        "additional_notes": "Regularly review and update the remote work strategy based on employee feedback and performance metrics."
      }
    ]

  