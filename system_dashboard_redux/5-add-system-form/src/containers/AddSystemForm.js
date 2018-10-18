import React from 'react';
import { connect } from 'react-redux';
import { fetchSystem } from '../actions';
import Button from '../components/Button';

let AddSystem = ({dispatch}) => {
  let githubAccount;
  let repoName;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch(fetchSystem(githubAccount.value, repoName.value));
        githubAccount.value = '';
        repoName.value = '';
      }}
    >
      <label>
        Github Account:
        <input
          type="text"
          ref={node => {
            githubAccount = node;
          }}
        />
      </label>
      
      <label>
        Repo Name:
        <input
          type="text"
          ref={node => {
            repoName = node;
          }}
        />
      </label>
      <Button type="submit" func={() => false}>
        Fetch System
      </Button>
    </form>
  );
}

AddSystem = connect()(AddSystem);

export default AddSystem;
