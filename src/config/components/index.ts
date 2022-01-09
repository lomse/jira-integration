'use strict'
import serverConfigs from './server';
import jiraConfigs from './jira';

const envs = { ...serverConfigs, ...jiraConfigs }

export default envs